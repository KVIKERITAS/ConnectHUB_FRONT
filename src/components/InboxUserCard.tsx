import { socket } from '../App.tsx'
import { TInbox } from '../models/typesInboxStore.ts'
import { request } from '../services/api.tsx'
import { useInboxStore } from '../store/inboxStore.ts'
import { useUserStore } from '../store/userStore.ts'

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
    request
      .getRequest(`chat/get/single/${chat._id}`, userToken)
      .then((data) => {
        setSelectedChat(data)
        socket.emit('join-room', chat._id)
      })
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
