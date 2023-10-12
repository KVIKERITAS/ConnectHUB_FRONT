import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai'
import { TPost } from '../store/postStore.ts'
import { Link } from 'react-router-dom'

type TCardProps = {
  post: TPost
}

const Card = ({ post }: TCardProps) => {
  return (
    <div className="max-w-sm bg-gray-900 rounded-lg shadow">
      <img
        className="rounded-t-lg h-[250px] w-[400px]"
        src={post.image}
        alt=""
      />
      <div className="p-5">
        <div className="flex gap-2 items-center">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={post.userImage}
            alt=""
          />
          <p className="text-sm mb-2">{post.username}</p>
        </div>
        <Link
          to={`post/${post._id}`}
          className="mb-3 font-normal text-white text-sm mt-3 line-clamp-5"
        >
          {post.message}
        </Link>
        <div className="flex gap-2">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineHeart />
            <span className="ml-1">{post.likes.length}</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineComment />
            <span className="ml-1">{post.comments.length}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
