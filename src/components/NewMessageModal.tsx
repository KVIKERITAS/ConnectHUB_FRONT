import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose, AiOutlineWarning } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { TMessageSchema, messageSchema } from '../models/typesForm.ts'
import { TUsers } from '../pages/UsersPage.tsx'
import { request } from '../services/api.tsx'
import { useUserStore } from '../store/userStore.ts'

type TNewMessageModalProps = {
  showNewMessageModal: boolean
  setShowNewMessageModal: React.Dispatch<React.SetStateAction<boolean>>
  user: TUsers
}

const NewMessageModal = ({
  showNewMessageModal,
  setShowNewMessageModal,
  user,
}: TNewMessageModalProps) => {
  const userToken = useUserStore((state) => state.userToken)
  const currentUser = useUserStore((state) => state.user)

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
      participants: [currentUser, user],
      chat: { userId: currentUser?._id, ...messageData },
    }

    request
      .postRequest('chat/send/message', dataToSend, userToken)
      .then((data) => {
        toast.success(data.message)
        reset()
      })
  }

  return (
    <>
      {showNewMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[450px] flex flex-col">
            <button
              className="text-white text-xl place-self-end"
              onClick={() => setShowNewMessageModal(false)}
            >
              <AiOutlineClose className="bg-gray-900 hover:bg-gray-800 w-[24px] h-[24px] rounded" />
            </button>
            <div className="bg-gray-800 rounded p-10 bg-opacity-90">
              <div className="flex justify-center items-center mb-5 text-white">
                <img
                  className="w-[35px] h-[35px]"
                  src="https://images.squarespace-cdn.com/content/v1/64b01b7f5312692724db8739/a2c54d31-22bd-492c-8c50-726a20448ff7/ChiAlpha_Icon_White.png"
                  alt=""
                />
                <p className="font-bold">ConnectHub</p>
              </div>
              <h5 className="text-xl text-white mb-5 ml-1 text-center">
                Start new conversation with <b>{user.username}</b>:
              </h5>
              <div className="flex flex-col gap-2 items-center">
                <form
                  className="w-full text-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <textarea
                    placeholder="Your text goes here"
                    {...register('message')}
                    className="px-4 py-2 rounded-l bg-gray-900 focus:outline-0 text-white bg-opacity-80 text-sm w-full h-[100px]"
                  ></textarea>
                  {errors.message ? (
                    <p className="text-red-500 flex items-center gap-1 justify-center text-sm">
                      <AiOutlineWarning />
                      {errors.message.message}
                    </p>
                  ) : (
                    <p className="h-[20px]"></p>
                  )}

                  <button
                    type="submit"
                    className="text-white p-2 bg-gray-900 rounded text-sm hover:bg-gray-700"
                    disabled={isSubmitting}
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewMessageModal
