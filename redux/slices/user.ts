import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IResponseUserDto } from '../../utils/api/types'
import { RootState } from '../store'

export interface IUser {
  data: IResponseUserDto | null
}

const initialState: IUser = {
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserData: (state, action: PayloadAction<IResponseUserDto>) => {
      state.data = action.payload
    },
  },
})

export const { setuserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data

export default userSlice.reducer
