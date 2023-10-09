import HeroSection from '../components/HeroSection.tsx'
import RegisterModal from '../components/RegisterModal.tsx'
import {useState} from 'react'
import LoginModal from '../components/LoginModal.tsx'

const MainPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <>
      <HeroSection
        setShowRegisterModal={setShowRegisterModal}
        setShowLoginModal={setShowLoginModal}
      />
      <RegisterModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  )
}

export default MainPage
