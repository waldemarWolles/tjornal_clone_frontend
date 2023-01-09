import axios from 'axios'
import { GetServerSidePropsContext, NextPageContext } from 'next'
import Cookies, { parseCookies } from 'nookies'
import { PostApi } from './post'
import { CommentApi } from './comment'
import { UserApi } from './user'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
  post: ReturnType<typeof PostApi>
  comment: ReturnType<typeof CommentApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies()
  const token = cookies.tj_token

  const instance = axios.create({
    baseURL: 'http://localhost:7777/',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  const apis = {
    user: UserApi,
    post: PostApi,
    comment: CommentApi,
  }

  return Object.entries(apis).reduce((prev, [key, fn]) => {
    return {
      ...prev,
      [key]: fn(instance),
    }
  }, {} as ApiReturnType)
}
