import React from 'react'
import api from '../services/api'
import { useDispatch } from 'react-redux'
import {
  signInRequest,
  signOut,
  resetPasswordRequest,
  forgotPasswordEmailRequest
} from '../store/modules/authentication/actions'
import { store } from '../store'

interface IUser {
  name: string
  email: string
}

interface IAuthContextProps {
  isAuthenticated: boolean
  user: IUser
  loading: boolean
  login: (email: string, password: string) => void
  logout: () => void
  forgotPassword: (email: string) => void
  resetPassword: (password: string, recoveryToken: string) => void
}

export const AuthContext = React.createContext<IAuthContextProps>(
  {} as IAuthContextProps
)

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContextProps => {
  return React.useContext(AuthContext)
}

export function useProvideAuth(): IAuthContextProps {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true)
    dispatch(signInRequest(email, password))
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)
    dispatch(signOut())
    delete api.defaults.headers.Authorization
    setLoading(false)
  }

  const forgotPassword = async (email: string): Promise<void> => {
    setLoading(true)
    dispatch(forgotPasswordEmailRequest(email))
    setLoading(false)
  }

  const resetPassword = async (
    password: string,
    recoveryToken: string
  ): Promise<void> => {
    setLoading(true)
    dispatch(resetPasswordRequest(password, recoveryToken))
    setLoading(false)
  }

  return {
    isAuthenticated: store.getState().authentication.isAuthenticated,
    user: store.getState().profile,
    loading,
    login,
    logout,
    forgotPassword,
    resetPassword
  }
}

export default AuthProvider
