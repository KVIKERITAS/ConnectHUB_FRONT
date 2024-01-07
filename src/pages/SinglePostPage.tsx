import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../components/CommentForm.tsx'
import SingleCommentCard from '../components/SingleCommentCard.tsx'
import SinglePostCard from '../components/SinglePostCard.tsx'
import { TPost } from '../models/typesPostStore.ts'
import { request } from '../services/api.tsx'
import { useUserStore } from '../store/userStore.ts'

const SinglePostPage = () => {
  const { post_id } = useParams()
  const userToken = useUserStore((state) => state.userToken)
  const [post, setPost] = useState<TPost | undefined>(undefined)

  useEffect(() => {
    request
      .getRequest(`posts/get/${post_id}`, userToken)
      .then((data) => setPost(data))
  })

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
