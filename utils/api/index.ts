import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from 'next'
import Cookies, { parseCookies } from 'nookies'
import { parse } from 'path'
import { PostApi } from './post'
import { UserApi } from './user'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
  post: ReturnType<typeof PostApi>
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

  return {
    user: UserApi(instance),
    post: PostApi(instance),
  }
}
