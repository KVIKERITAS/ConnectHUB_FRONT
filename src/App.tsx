import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import MainPage from './pages/MainPage.tsx'
import SideBar from './components/SideBar.tsx'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import InboxPage from './pages/InboxPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import {ToastContainer} from 'react-toastify'
import {useUserStore} from './store/userStore.ts'
import {useState} from 'react'
import EditProfileModal from './components/EditProfileModal.tsx'

function App() {
  const user = useUserStore((state) => state.user)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)

  return (
    <>
      {!user ? (
        <MainPage />
      ) : (
        <div className="flex text-white">
          <SideBar setShowEditProfileModal={setShowEditProfileModal} />
          <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-gray-800 overflow-auto">
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/inbox'} element={<InboxPage />} />
              <Route path={'/users'} element={<UsersPage />} />
              {/*<Route path={'/profile'} element={<ProfilePage />} />*/}
            </Routes>
            <EditProfileModal
              showEditProfileModal={showEditProfileModal}
              setShowEditProfileModal={setShowEditProfileModal}
            />
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
      />
    </>
  )
}

export default App
