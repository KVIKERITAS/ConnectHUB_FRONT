import UserCard from '../components/UserCard.tsx'
import axios from 'axios'
import { useUserStore } from '../store/userStore.ts'
import { useEffect } from 'react'

const UsersPage = () => {
  const userToken = useUserStore((state) => state.userToken)

  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:8080/api/users/get', {
      headers: { Authorization: `${userToken}` },
    })

    console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="flex flex-wrap gap-2">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default UsersPage
