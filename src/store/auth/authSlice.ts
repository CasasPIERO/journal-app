import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authState {
  status: 'checking' | 'authenticated' | 'not-authenticated',
  uid: string | null,
  email: string | null,
  displayName: string | null,
  photoURL: string | null,
  errorMessage: string | null,
}

const initialState: authState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<authState>) => {
      state.status = 'authenticated'
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
    },
    logout: (state) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions