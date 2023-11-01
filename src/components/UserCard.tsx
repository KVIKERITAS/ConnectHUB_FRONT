import { AiOutlineSend } from 'react-icons/ai'
import { TUsers } from '../pages/UsersPage.tsx'
import { useInboxStore } from '../store/inboxStore.ts'
import { useNavigate } from 'react-router-dom'
import NewMessageModal from './NewMessageModal.tsx'
import { useState } from 'react'

type TUserCardProps = {
  user: TUsers
}

const UserCard = ({ user }: TUserCardProps) => {
  const [showNewMessageModal, setShowNewMessageModal] = useState(false)
  const { inbox, setSelectedChat } = useInboxStore((state) => ({
    inbox: state.inbox,
    setSelectedChat: state.setSelectedChat,
  }))

  const navigate = useNavigate()

  const handleMessage = () => {
    const foundChat = inbox.find((chat) =>
      chat.participants.some((participant) => participant._id === user._id),
    )

    if (foundChat) {
      setSelectedChat(foundChat)
      navigate('/inbox')
    } else {
      setShowNewMessageModal(true)
    }
  }

  return (
    <>
      <div className="flex bg-gray-900 p-2 rounded gap-2 flex-col justify-center items-center">
        <img
          className="rounded-full h-[150px] w-[150px]"
          src={user.image}
          alt=""
        />
        <div className="flex flex-col items-center gap-2 w-full">
          <p className="text-sm">{user.username}</p>
          <div className="text-sm font-normal bg-gray-800 w-full justify-center flex cursor-pointer p-2 rounded hover:bg-gray-700">
            <button
              className="text-white flex items-center gap-1 font-semibold"
              onClick={handleMessage}
            >
              Message <AiOutlineSend />
            </button>
          </div>
        </div>
      </div>
      <NewMessageModal
        showNewMessageModal={showNewMessageModal}
        setShowNewMessageModal={setShowNewMessageModal}
        user={user}
      />
    </>
  )
}

export default UserCard
