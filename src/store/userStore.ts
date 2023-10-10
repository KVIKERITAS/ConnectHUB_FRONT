import {create} from 'zustand'

type TUser = {
  id: string
  image: string
  username: string
}

type TUserStore = {
  user: TUser | null
  userToken: string | null
  setUser: (data: TUser | null) => void
  setUserToken: (data: string) => void
}

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  userToken: null,
  setUser: (data) => set({user: data}),
  setUserToken: (data) => set({userToken: data}),
}))
