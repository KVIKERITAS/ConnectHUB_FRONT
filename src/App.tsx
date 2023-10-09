import './App.css'
import MainPage from './pages/MainPage.tsx'
import SideBar from './components/SideBar.tsx'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import {useState} from 'react'
import InboxPage from './pages/InboxPage.tsx'
import UsersPage from './pages/UsersPage.tsx'

function App() {
  const [user, setUser] = useState(true)

  return (
    <>
      {!user ? (
        <MainPage />
      ) : (
        <div className="flex text-white">
          <SideBar />
          <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-gray-800 overflow-auto">
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/inbox'} element={<InboxPage />} />
              <Route path={'/users'} element={<UsersPage />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  )
}

export default App
