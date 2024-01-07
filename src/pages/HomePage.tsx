import { useEffect } from 'react'
import Card from '../components/Card.tsx'
import FilterBar from '../components/FilterBar.tsx'
import { usePostStore } from '../store/postStore.ts'
import { useUserStore } from '../store/userStore.ts'

import { request } from '../services/api.tsx'

const HomePage = () => {
  const userToken = useUserStore((state) => state.userToken)
  const { posts, setPosts } = usePostStore((state) => ({
    posts: state.posts,
    setPosts: state.setPosts,
  }))
  // const getPosts = async () => {
  //   const { data } = await axios.get('http://localhost:8080/api/posts/get', {
  //     headers: { Authorization: `${userToken}` },
  //   })

  //   return setPosts(data.posts)
  // }

  useEffect(() => {
    request
      .getRequest('posts/get', userToken)
      .then((data) => setPosts(data.posts))
  })

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
