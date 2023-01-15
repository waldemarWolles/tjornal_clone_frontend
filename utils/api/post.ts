import { OutputData } from '@editorjs/editorjs'
import axios, { AxiosInstance } from 'axios'
import { IPost } from './types'

interface ICreatePostDto {
  title: string
  body: OutputData['blocks']
}

interface ISearchPostDto {
  title?: string
  body?: string
  views?: 'DESC' | 'ASC'
  tag?: string
  limit?: number
  take?: number
}

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<IPost[]>('posts')
    return data
  },

  async search(query: ISearchPostDto) {
    const { data } = await instance.get<{ items: IPost[]; total: number }>('posts/search', { params: query })
    return data
  },

  async getOne(id: number) {
    const { data } = await instance.get<IPost>(`posts/${id}`)
    return data
  },

  async create(dto: ICreatePostDto) {
    const { data } = await instance.post<ICreatePostDto, { data: IPost }>('posts', dto)
    return data
  },

  async update(id: number, dto: ICreatePostDto) {
    const { data } = await instance.patch<ICreatePostDto, { data: IPost }>(`posts/${id}`, dto)
    return data
  },
})
