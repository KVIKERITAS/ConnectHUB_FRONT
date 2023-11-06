import { useParams } from 'react-router-dom'
import SinglePostCard from '../components/SinglePostCard.tsx'
import CommentForm from '../components/CommentForm.tsx'
import SingleCommentCard from '../components/SingleCommentCard.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useUserStore } from '../store/userStore.ts'
import { TPost } from '../models/typesPostStore.ts'

const SinglePostPage = () => {
  const { post_id } = useParams()
  const userToken = useUserStore((state) => state.userToken)
  const [post, setPost] = useState<TPost | undefined>(undefined)

  const getPost = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/posts/get/${post_id}`,
      {
        headers: { Authorization: `${userToken}` },
      },
    )
    return setPost(data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      {post && (
        <>
          <SinglePostCard post={post} setPost={setPost} />
          <CommentForm postId={post._id} />
          {post.comments &&
            post.comments.map((comment, idx) => (
              <SingleCommentCard key={idx} comment={comment} />
            ))}
        </>
      )}
    </>
  )
}

export default SinglePostPage
