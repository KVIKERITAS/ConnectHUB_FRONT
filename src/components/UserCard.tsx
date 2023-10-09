import {AiOutlineSend} from 'react-icons/ai'

const UserCard = () => {
  return (
    <div className="flex bg-gray-900 p-2 rounded gap-2 flex-col justify-center items-center">
      <img
        className="rounded-full h-[200px]"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-sm">Username</p>
        <div className="text-sm font-normal bg-gray-800 w-full justify-center flex cursor-pointer p-2 rounded hover:bg-gray-700">
          <AiOutlineSend className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default UserCard
