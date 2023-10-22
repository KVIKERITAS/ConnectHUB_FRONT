import { create } from 'zustand'
import { TPostStore } from '../models/typesPostStore.ts'

export const usePostStore = create<TPostStore>((set) => ({
  posts: [],
  setPosts: (data) => set({ posts: data }),
}))
