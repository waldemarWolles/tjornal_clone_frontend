import { OutputData } from '@editorjs/editorjs'

export interface ILoginDto {
  email: string
  password: string
}

export interface ICreateUserDto extends ILoginDto {
  fullName: string
}

export interface IResponseUserDto {
  createAt: string
  email: string
  fullName: string
  id: number
  token: string
  updatedAt: string
}

export interface IPost {
  title: string
  body: OutputData['blocks']
  description: string
  tags: null | string
  id: number
  views: number
  user: IResponseUserDto
  createdAt: string
  updatedAt: string
}

export interface IComment {
  id: number
  postId: number
  user: IResponseUserDto
  text: string
  createdAt: string
  updatedAt: string
}
