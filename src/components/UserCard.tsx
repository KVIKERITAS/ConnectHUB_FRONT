import { AiOutlineSend } from 'react-icons/ai'
import { TUsers } from '../pages/UsersPage.tsx'

type TUserCardProps = {
  user: TUsers
}

const UserCard = ({ user }: TUserCardProps) => {
  return (
    <div className="flex bg-gray-900 p-2 rounded gap-2 flex-col justify-center items-center">
      <img
        className="rounded-full h-[150px] w-[150px]"
        src={user.image}
        alt=""
      />
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-sm">{user.username}</p>
        <div className="text-sm font-normal bg-gray-800 w-full justify-center flex cursor-pointer p-2 rounded hover:bg-gray-700">
          <AiOutlineSend className="text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default UserCard
