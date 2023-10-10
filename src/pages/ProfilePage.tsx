import {useUserStore} from '../store/userStore.ts'

const ProfilePage = () => {
  const user = useUserStore((state) => state.user)

  return (
    <div className="bg-gray-900 rounded p-5 w-fit flex gap-10">
      <div className="flex flex-col gap-5">
        <img className="w-80" src={user?.image} alt="" />
        <button className="text-white p-2 bg-gray-800 rounded font-bold hover:bg-gray-700">
          Change image
        </button>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <input
          type="text"
          className="px-4 py-2 rounded bg-gray-800 focus:outline-0 text-white bg-opacity-80"
        />
        <button className="text-white p-2 bg-gray-800 rounded font-bold hover:bg-gray-700">
          Change password
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
