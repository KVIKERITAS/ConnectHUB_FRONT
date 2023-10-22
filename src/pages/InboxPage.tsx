import { AiOutlineSend } from 'react-icons/ai'
import InboxUsersContainer from '../components/InboxUsersContainer.tsx'
import InboxMessage from '../components/InboxMessage.tsx'

const InboxPage = () => {
  return (
    <div className="flex gap-1">
      <InboxUsersContainer />
      <div className="bg-gray-700 w-full rounded flex flex-col justify-between">
        <div className="p-2 flex flex-col gap-1">
          <InboxMessage />
        </div>
        <div className="flex bg-gray-700 p-2">
          <input
            className="w-full bg-gray-900 rounded-l p-1"
            type="text"
            placeholder="Start a new message"
          />
          <button className="bg-gray-900 rounded-r p-1">
            <AiOutlineSend className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InboxPage
