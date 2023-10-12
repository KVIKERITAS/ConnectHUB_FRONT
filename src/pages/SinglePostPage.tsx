import { useParams } from 'react-router-dom'
import { AiOutlineComment, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai'
import { usePostStore } from '../store/postStore.ts'

const SinglePostPage = () => {
  const { post_id } = useParams()
  const posts = usePostStore((state) => state.posts)
  const post = posts.find((singlePost) => singlePost._id === post_id)
  return (
    <>
      {post && (
        <>
          <div className="max-w-full bg-gray-900 rounded-lg shadow flex flex-col lg:flex-row">
            <img
              className="rounded-t-lg lg:rounded-l-lg"
              src={post.image}
              alt=""
            />
            <div className="p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={post.userImage}
                    alt=""
                  />
                  <p className="text-sm mb-2">{post.username}</p>
                </div>
                <button className="text-sm font-bolder bg-gray-800 justify-center items-center flex cursor-pointer p-2 rounded hover:bg-gray-700 gap-10">
                  Send a message
                  <AiOutlineSend className="text-gray-500" />
                </button>
              </div>
              <p className="mb-3 font-normal text-white text-sm mt-3">
                {post.message}
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <AiOutlineHeart />
                  <span className="ml-1">{post.likes.length}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <form className="flex">
              <textarea
                placeholder="Write a comment..."
                className="px-4 py-2 rounded-l bg-gray-900 focus:outline-0 text-white bg-opacity-80 text-sm w-3/4 h-[100px]"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 rounded-r bg-gray-700 focus:outline-0 text-white bg-opacity-80 hover:bg-gray-600"
              >
                <AiOutlineComment />
              </button>
            </form>
          </div>

          <div className="w-full bg-gray-700 mt-5 rounded">
            <h5 className="text-sm p-2">Username</h5>
            <p className="text-sm font-normal bg-gray-900 rounded-b p-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa id laudantium magni, molestiae nulla praesentium
              reiciendis sequi. Culpa, et.
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default SinglePostPage
