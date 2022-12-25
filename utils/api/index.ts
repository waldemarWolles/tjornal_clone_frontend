import axios from 'axios'
import { ICreateUserDto, ILoginDto, IResponseUserDto } from './types'

const instance = axios.create({
  baseURL: 'http://localhost:7777/',
})

export const UserApi = {
  async register(dto: ICreateUserDto) {
    const { data } = await instance.post<ICreateUserDto, { data: IResponseUserDto }>('auth/register', dto)
    return data
  },

  async login(dto: ILoginDto) {
    const { data } = await instance.post<ILoginDto, { data: IResponseUserDto }>('auth/login', dto)
    return data
  },
}
