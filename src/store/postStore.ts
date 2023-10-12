import { create } from 'zustand'

export type TPost = {
  _id: string
  image: string
  message: string
  userId: string
  username: string
  userImage: string
  comments: []
  likes: []
}

type TPostStore = {
  posts: TPost[] | []
  setPosts: (data: TPost[]) => void
}

export const usePostStore = create<TPostStore>((set) => ({
  posts: [],
  setPosts: (data) => set({ posts: data }),
}))
