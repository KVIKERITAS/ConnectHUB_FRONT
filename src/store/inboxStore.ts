import { create } from 'zustand'
import { TInboxStore } from '../models/typesInboxStore.ts'

export const useInboxStore = create<TInboxStore>((set) => ({
  inbox: [],
  selectedChat: null,
  setInbox: (data) => set({ inbox: data }),
  setSelectedChat: (data) => set({ selectedChat: data }),
}))
