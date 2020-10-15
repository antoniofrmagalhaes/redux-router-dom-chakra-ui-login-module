import { takeLatest, call, put, all } from 'redux-saga/effects'
import history from '../../../services/history'
import { toast } from 'react-toastify'
import api from '../../../services/api'

import {
  forgotPasswordEmailFailure,
  forgotPasswordEmailSuccess,
  resetPasswordRequest,
  resetPasswordFailure,
  resetPasswordSuccess,
  signInFailure,
  signInRequest,
  signInSuccess
} from './actions'

export function* signIn({
  payload: { email, password }
}: ReturnType<typeof signInRequest>): any {
  try {
    const response = yield call(api.post, 'sessions', { email, password })
    const { user, token } = response.data
    yield put(signInSuccess(user, token))
    api.defaults.headers.Authorization = `Bearer ${token}`
    history.push('/')
  } catch (error) {
    toast.error('Falha na autenticação')
    yield put(signInFailure())
  }
}

export function signOut(): void {
  history.push('/login')
}

export function* sendForgotPasswordEmail({
  payload: { email }
}: ReturnType<typeof signInRequest>): any {
  try {
    yield call(api.post, '/password/forgot', { email })
    toast.info(
      `Email enviado para ${email}. Por favor, verifique sua caixa de entrada.`
    )
    yield put(forgotPasswordEmailSuccess())
  } catch (error) {
    toast.error(`Falha ao enviar email de recuperação de senha.`)
    yield put(forgotPasswordEmailFailure())
  }
}

export function* resetPassword({
  payload: { password, recoveryToken }
}: ReturnType<typeof resetPasswordRequest>): any {
  try {
    api.defaults.headers.Authorization = `Bearer ${recoveryToken}`
    yield call(api.put, '/password/reset', { password })
    yield put(resetPasswordSuccess())
    toast.success('Password reset sucessfully!')
    setTimeout(() => {
      history.push('/login')
    }, 1500)
  } catch (error) {
    yield put(resetPasswordFailure())
  }
}

export function setToken({ payload }: ReturnType<typeof signInSuccess>): void {
  if (!payload) return
  const { token } = payload
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/FORGOT_PASSWORD_EMAIL_REQUEST', sendForgotPasswordEmail),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPassword)
])
