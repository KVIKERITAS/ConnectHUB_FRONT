import {AiOutlineComment, AiOutlineHeart} from 'react-icons/ai'

const Card = () => {
  return (
    <div className="max-w-sm bg-gray-900 rounded-lg shadow cursor-pointer">
      <img
        className="rounded-t-lg"
        src="https://img.freepik.com/premium-photo/abstract-rainbow-colorful-bright-feather-closeup-up-macro-view-background-plumage-texture-with-dew-drops_753134-644.jpg"
        alt=""
      />
      <div className="p-5">
        <div className="flex gap-1 items-center">
          <img
            className="rounded-full h-[30px]"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <p className="text-sm mb-2">Username</p>
        </div>
        <p className="mb-3 font-normal text-white text-sm mt-3">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-2">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineHeart />
            <span className="ml-1">2</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiOutlineComment />
            <span className="ml-1">2</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
