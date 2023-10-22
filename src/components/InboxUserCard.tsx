const InboxUserCard = () => {
  return (
    <div className="flex bg-gray-800 rounded gap-3 items-center p-2 cursor-pointer hover:bg-gray-700 overflow-hidden">
      <img
        className="rounded-full h-[40px]"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
      />
      <div>
        <p className="text-sm">Username</p>
        <p className="text-sm font-normal">Message</p>
      </div>
    </div>
  )
}

export default InboxUserCard
