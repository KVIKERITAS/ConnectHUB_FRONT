import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard.tsx'
import { request } from '../services/api.tsx'
import { useUserStore } from '../store/userStore.ts'

export type TUsers = {
  _id: string
  username: string
  image: string
}

const UsersPage = () => {
  const userToken = useUserStore((state) => state.userToken)
  const [allUsers, setAllUsers] = useState<TUsers[] | undefined>(undefined)

  useEffect(() => {
    request
      .getRequest('users/get', userToken)
      .then((data) => setAllUsers(data.users))
  })

  return (
    <div className="flex flex-wrap gap-2">
      {allUsers &&
        allUsers.map((user) => <UserCard key={user._id} user={user} />)}
    </div>
  )
}

export default UsersPage
