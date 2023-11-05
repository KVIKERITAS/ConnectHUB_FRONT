import { TUser } from './typesUserStore.ts'

export type TInbox = {
  _id: string
  participants: TUser[]
  chat: {
    userId: string
    message: string | null
  }[]
  updatedAt: Date
}

export type TInboxStore = {
  inbox: TInbox[] | []
  selectedChat: TInbox | null
  setInbox: (data: TInbox[]) => void
  setSelectedChat: (data: TInbox | null) => void
}
