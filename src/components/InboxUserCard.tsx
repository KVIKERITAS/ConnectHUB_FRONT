import { TInbox } from '../models/typesInboxStore.ts'
import { useUserStore } from '../store/userStore.ts'
import { useInboxStore } from '../store/inboxStore.ts'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IErrorBackend } from '../models/typesBackEndError.ts'
import { socket } from '../App.tsx'

type TInboxUserCardProps = {
  chat: TInbox
}

const InboxUserCard = ({ chat }: TInboxUserCardProps) => {
  const { currentUserId, userToken } = useUserStore((state) => ({
    currentUserId: state.user?._id,
    userToken: state.userToken,
  }))
  const { selectedChat, setSelectedChat } = useInboxStore((state) => ({
    selectedChat: state.selectedChat,
    setSelectedChat: state.setSelectedChat,
  }))
  const inboxHolder = chat.participants.find(
    (participant) => participant._id !== currentUserId,
  )

  const handleChat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/chat/get/single/${chat._id}`,
        { headers: { Authorization: `${userToken}` } },
      )
      setSelectedChat(data)
      socket.emit('join-room', chat._id)
    } catch (error: unknown) {
      toast.error((error as IErrorBackend).response.data.message)
    }
  }

  return (
    <div
      className={`h-[100px] flex rounded gap-3 items-center p-5 cursor-pointer hover:bg-gray-700 overflow-hidden mb-2 ${
        selectedChat?._id === chat._id ? 'bg-gray-700' : 'bg-gray-800'
      }`}
      onClick={() => handleChat()}
    >
      {inboxHolder && (
        <>
          <img
            className="rounded-full h-[40px] w-[40px]"
            src={inboxHolder?.image}
            alt=""
          />
          <div>
            <p className="text-sm">{inboxHolder?.username}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default InboxUserCard
