import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
import { useUserStore } from '../store/userStore.ts'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IErrorBackend } from '../models/typesBackEndError.ts'
import { TPost } from '../models/typesPostStore.ts'
import { useInboxStore } from '../store/inboxStore.ts'
import { useNavigate } from 'react-router-dom'
import NewMessageModal from './NewMessageModal.tsx'
import React, { useState } from 'react'
import { TUser } from '../models/typesUserStore.ts'

type TSinglePostCardProps = {
  post: TPost
  setPost: React.Dispatch<React.SetStateAction<TPost | undefined>>
}

const SinglePostCard = ({ post, setPost }: TSinglePostCardProps) => {
  const userToken = useUserStore((state) => state.userToken)
  const user = useUserStore((state) => state.user)
  const isLiked = post.likes.find((like) => like === user?._id)
  const { inbox, setSelectedChat } = useInboxStore((state) => ({
    inbox: state.inbox,
    setSelectedChat: state.setSelectedChat,
  }))

  const [showNewMessageModal, setShowNewMessageModal] = useState(false)
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState<TUser | null>(null)

  const handleLike = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/posts/like/${post._id}`,
        { headers: { Authorization: `${userToken}` } },
      )
      setPost(data.post)
      toast.success(data.message)
    } catch (error: unknown) {
      toast.error((error as IErrorBackend).response.data.message)
    }
  }

  const handleMessage = () => {
    const foundChat = inbox.find((chat) =>
      chat.participants.some((participant) => participant._id === post.userId),
    )

    if (foundChat) {
      setSelectedChat(foundChat)
      navigate('/inbox')
    } else {
      setUserInfo({
        _id: post.userId,
        username: post.username,
        image: post.userImage,
      })
      setShowNewMessageModal(true)
    }
  }

  return (
    <>
      <div className="max-w-full bg-gray-900 rounded-lg shadow flex flex-col lg:flex-row">
        <img
          className="rounded-t-lg lg:rounded-l-lg max-w-[30%]"
          src={post.image}
          alt=""
        />
        <div className="p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={post.userImage}
                alt=""
              />
              <p className="text-sm mb-2">{post.username}</p>
            </div>
            <button
              onClick={handleMessage}
              className="text-sm font-bolder bg-gray-800 flex justify-center items-center cursor-pointer p-2 rounded hover:bg-gray-700 gap-10"
            >
              Send a message
              <AiOutlineSend className="text-gray-500" />
            </button>
          </div>
          <p className="mb-3 font-normal text-white text-sm mt-3">
            {post.message}
          </p>
          <div>
            <div
              onClick={handleLike}
              className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              <span className="ml-1">{post.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
      {userInfo && (
        <NewMessageModal
          showNewMessageModal={showNewMessageModal}
          setShowNewMessageModal={setShowNewMessageModal}
          user={userInfo}
        />
      )}
    </>
  )
}

export default SinglePostCard
