type TRegisterModal = {
  showRegisterModal: boolean
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterModal = ({
  showRegisterModal,
  setShowRegisterModal,
}: TRegisterModal) => {
  return (
    <>
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[600px] flex flex-col">
            <button
              className="text-white text-xl place-self-end"
              onClick={() => setShowRegisterModal(false)}
            >
              X
            </button>
            <div className="bg-gray-800 p-2 rounded">Modal content</div>
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterModal
