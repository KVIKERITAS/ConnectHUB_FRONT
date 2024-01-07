import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const API_URL = 'http://localhost:8080/api/'

axios.defaults.baseURL = API_URL

export const request = {
  async getRequest(route: string, token: string | null) {
    try {
      const { data } = await axios.get(route, {
        headers: { Authorization: `${token}` },
      })

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  },

  async postRequest(route: string, requestData: any, token?: string | null) {
    try {
      const { data } = await axios.post(
        route,
        { ...requestData },
        { headers: { Authorization: `${token}` } },
      )

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  },
}
