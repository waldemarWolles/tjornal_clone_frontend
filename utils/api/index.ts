import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from 'next'
import Cookies, { parseCookies } from 'nookies'
import { parse } from 'path'
import { UserApi } from './user'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
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
  }
}
