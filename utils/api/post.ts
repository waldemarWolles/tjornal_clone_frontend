import { OutputData } from '@editorjs/editorjs'
import axios, { AxiosInstance } from 'axios'
import { IPost } from './types'

interface ICreatePostDto {
  title: string
  body: OutputData['blocks']
}

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<IPost>('posts')
    return data
  },

  async create(dto: ICreatePostDto) {
    const { data } = await instance.post<ICreatePostDto, { data: IPost }>('posts', dto)
    return data
  },
})
