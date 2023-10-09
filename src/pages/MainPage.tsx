import HeroSection from '../components/HeroSection.tsx'
import RegisterModal from '../components/RegisterModal.tsx'
import {useState} from 'react'

const MainPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  return (
    <>
      <HeroSection setShowRegisterModal={setShowRegisterModal} />
      <RegisterModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
    </>
  )
}

export default MainPage
