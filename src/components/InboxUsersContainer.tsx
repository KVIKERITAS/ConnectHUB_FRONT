import InboxUserCard from './InboxUserCard.tsx'
import { useInboxStore } from '../store/inboxStore.ts'

const InboxUsersContainer = () => {
  const inbox = useInboxStore((state) => state.inbox)
  const sortedInbox = inbox.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return (
    <div className="bg-gray-900 h-[850px] rounded w-1/2 p-2 overflow-auto">
      {sortedInbox.map((chat, idx) => (
        <InboxUserCard key={idx} chat={chat} />
      ))}
    </div>
  )
}

export default InboxUsersContainer
