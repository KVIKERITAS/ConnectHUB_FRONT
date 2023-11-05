import Card from '../components/Card.tsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useUserStore } from '../store/userStore.ts'
import { usePostStore } from '../store/postStore.ts'
import FilterBar from '../components/FilterBar.tsx'

const HomePage = () => {
  const userToken = useUserStore((state) => state.userToken)
  const { posts, setPosts } = usePostStore((state) => ({
    posts: state.posts,
    setPosts: state.setPosts,
  }))
  const getPosts = async () => {
    const { data } = await axios.get('http://localhost:8080/api/posts/get', {
      headers: { Authorization: `${userToken}` },
    })

    return setPosts(data.posts)
  }

  useEffect(() => {
    getPosts()
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
