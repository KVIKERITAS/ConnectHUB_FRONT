import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineSend, AiOutlineWarning } from 'react-icons/ai'
import { socket } from '../App.tsx'
import InboxMessage from '../components/InboxMessage.tsx'
import InboxUsersContainer from '../components/InboxUsersContainer.tsx'
import { TMessageSchema, messageSchema } from '../models/typesForm.ts'
import { request } from '../services/api.tsx'
import { useInboxStore } from '../store/inboxStore.ts'
import { useUserStore } from '../store/userStore.ts'

const InboxPage = () => {
  const { selectedChat, setInbox } = useInboxStore((state) => ({
    selectedChat: state.selectedChat,
    setInbox: state.setInbox,
    setSelectedChat: state.setSelectedChat,
  }))
  const { currentUser, userToken } = useUserStore((state) => ({
    currentUser: state.user,
    userToken: state.userToken,
  }))

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TMessageSchema>({
    mode: 'onBlur',
    resolver: zodResolver(messageSchema),
  })

  const onSubmit = async (messageData: TMessageSchema) => {
    const dataToSend = {
      _id: selectedChat?._id,
      participants: selectedChat?.participants,
      chat: { userId: currentUser?._id, ...messageData },
    }

    socket.emit('sendMessage', dataToSend)
    reset()
  }

  useEffect(() => {
    request
      .getRequest(`chat/get/inbox/${currentUser?._id}`, userToken)
      .then((data) => setInbox(data.inbox))
  })

  return (
    <div className="flex gap-1">
      <InboxUsersContainer />
      {selectedChat && (
        <div className="bg-gray-700 w-full rounded max-h-[53rem] flex flex-col justify-between overflow-auto">
          <div className="p-2 flex flex-col gap-1 justify-end">
            {selectedChat?.chat.map((chatMessage, idx) => (
              <InboxMessage key={idx} chatMessage={chatMessage} />
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex bg-gray-700 p-2 flex-col"
          >
            {errors.message && (
              <p className="text-red-500 gap-1 text-sm flex items-center">
                <AiOutlineWarning />
                {errors.message.message}
              </p>
            )}
            <div className="flex w-full">
              <input
                placeholder="Start a new message"
                {...register('message')}
                className="px-4 py-2 rounded-l bg-gray-900 focus:outline-0 text-white bg-opacity-80 text-sm w-full"
              />
              <button
                type="submit"
                className="bg-gray-900 rounded-r p-1 w-[100px] flex items-center justify-center hover:bg-gray-800"
                disabled={isSubmitting}
              >
                <AiOutlineSend className="text-gray-700" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default InboxPage
