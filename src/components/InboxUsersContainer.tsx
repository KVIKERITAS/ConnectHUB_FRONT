import InboxUserCard from './InboxUserCard.tsx'

const InboxUsersContainer = () => {
  return (
    <div className="bg-gray-900 min-h-[850px] rounded flex-initial w-1/2 p-2 flex flex-col gap-2 overflow-auto">
      <InboxUserCard />
      <InboxUserCard />
      <InboxUserCard />
      <InboxUserCard />
      <InboxUserCard />
    </div>
  )
}

export default InboxUsersContainer
