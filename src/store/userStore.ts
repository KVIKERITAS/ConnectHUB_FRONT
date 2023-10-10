import {create} from 'zustand'

type TUser = {
  id: string
  image: string
  token: string
  username: string
}

type TUserStore = {
  user: TUser | null
  setUser: (data: TUser | null) => void
}

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  setUser: (data) => set({user: data}),
}))
