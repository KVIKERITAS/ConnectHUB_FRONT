import Card from '../components/Card.tsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useUserStore } from '../store/userStore.ts'
import { usePostStore } from '../store/postStore.ts'
import FilterBar from '../components/FilterBar.tsx'
import { toast } from 'react-toastify'
import { IErrorBackend } from '../models/typesBackEndError.ts'
import { useInboxStore } from '../store/inboxStore.ts'

const HomePage = () => {
  const { userToken, user } = useUserStore((state) => ({
    userToken: state.userToken,
    user: state.user,
  }))
  const { posts, setPosts } = usePostStore((state) => ({
    posts: state.posts,
    setPosts: state.setPosts,
  }))
  const setInbox = useInboxStore((state) => state.setInbox)

  const getPosts = async () => {
    const { data } = await axios.get('http://localhost:8080/api/posts/get', {
      headers: { Authorization: `${userToken}` },
    })

    return setPosts(data.posts)
  }

  const getInbox = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/chat/get/inbox/${user?._id}`,
        { headers: { Authorization: `${userToken}` } },
      )
      setInbox(data.inbox)
    } catch (error) {
      toast.error((error as IErrorBackend).response.data.message)
    }
  }

  useEffect(() => {
    getPosts()
    getInbox()
  }, [])

  return (
    <>
      <FilterBar />
      <div className="flex flex-wrap gap-5 mx-auto">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage
