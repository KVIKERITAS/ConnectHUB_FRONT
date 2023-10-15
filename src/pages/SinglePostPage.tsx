import { useParams } from 'react-router-dom'
import { usePostStore } from '../store/postStore.ts'
import SinglePostCard from '../components/SinglePostCard.tsx'
import CommentForm from '../components/CommentForm.tsx'
import SingleCommentCard from '../components/SingleCommentCard.tsx'

const SinglePostPage = () => {
  const { post_id } = useParams()
  const posts = usePostStore((state) => state.posts)
  const post = posts.find((singlePost) => singlePost._id === post_id)
  return (
    <>
      {post && (
        <>
          <SinglePostCard post={post} />
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
