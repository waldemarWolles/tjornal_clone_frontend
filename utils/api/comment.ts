import { OutputData } from '@editorjs/editorjs'
import axios, { AxiosInstance } from 'axios'
import { IComment, IPost } from './types'

interface ICreateCommentDto {
  postId: number
  text: string
}

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId?: number) {
    const { data } = await instance.get<IComment[]>('comments', { params: { postId } })
    return data
  },

  async create(dto: ICreateCommentDto) {
    const { data } = await instance.post<ICreateCommentDto, { data: IComment }>('comments', dto)
    return data
  },

  async delete(commentId: number) {
    return await instance.delete(`comments/${commentId}`)
  },
})
