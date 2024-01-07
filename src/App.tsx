import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { io } from 'socket.io-client'
import './App.css'
import CreatePostModal from './components/CreatePostModal.tsx'
import EditProfileModal from './components/EditProfileModal.tsx'
import SideBar from './components/SideBar.tsx'
import HomePage from './pages/HomePage.tsx'
import InboxPage from './pages/InboxPage.tsx'
import MainPage from './pages/MainPage.tsx'
import SinglePostPage from './pages/SinglePostPage.tsx'
import UsersPage from './pages/UsersPage.tsx'
import { request } from './services/api.tsx'
import { useInboxStore } from './store/inboxStore.ts'
import { useUserStore } from './store/userStore.ts'

export const socket = io('http://localhost:8080', {
  autoConnect: true,
})

function App() {
  const { user, setUser, setUserToken } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    userToken: state.userToken,
    setUserToken: state.setUserToken,
  }))
  const setSelectedChat = useInboxStore((state) => state.setSelectedChat)

  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showCreatePostModal, setShowCreatePostModal] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token) {
      request.getRequest('users/autologin', token).then((data) => {
        if (!data.error) {
          setUserToken(token)
          setUser(data.user)
          setSelectedChat(null)
        }
      })
    }

    socket.on('updateChat', (chat) => {
      setSelectedChat(chat)
    })
  })

  return (
    <>
      {!user ? (
        <MainPage />
      ) : (
        <div className="flex text-white">
          <SideBar
            setShowEditProfileModal={setShowEditProfileModal}
            setShowCreatePostModal={setShowCreatePostModal}
          />
          <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-gray-800 overflow-auto">
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/inbox'} element={<InboxPage />} />
              <Route path={'/users'} element={<UsersPage />} />
              <Route path={'/post/:post_id'} element={<SinglePostPage />} />
            </Routes>
            <EditProfileModal
              showEditProfileModal={showEditProfileModal}
              setShowEditProfileModal={setShowEditProfileModal}
            />
            <CreatePostModal
              showCreatePostModal={showCreatePostModal}
              setShowCreatePostModal={setShowCreatePostModal}
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
