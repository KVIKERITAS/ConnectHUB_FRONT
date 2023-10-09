import {AiOutlineSend} from 'react-icons/ai'

const InboxPage = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-gray-900 min-h-[850px] rounded flex-initial w-1/2 p-2 flex flex-col gap-2 overflow-auto">
        <div className="flex bg-gray-800 rounded gap-3 items-center p-2 cursor-pointer hover:bg-gray-700 overflow-hidden">
          <img
            className="rounded-full h-[40px]"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div>
            <p className="text-sm">Username</p>
            <p className="text-sm font-normal">Message</p>
          </div>
        </div>
        <div className="flex bg-gray-800 rounded gap-3 items-center p-2 cursor-pointer hover:bg-gray-700 overflow-hidden">
          <img
            className="rounded-full h-[40px]"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div>
            <p className="text-sm">Username</p>
            <p className="text-sm font-normal">Message</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 w-full rounded flex flex-col justify-between">
        <div className="p-2 flex flex-col gap-1">
          <div className="bg-gray-900 rounded p-1 w-fit">
            <p className="font-thin text-sm">Message</p>
          </div>
          <div className="bg-gray-800 rounded p-1 w-fit self-end">
            <p className="font-thin text-sm">Message</p>
          </div>
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
