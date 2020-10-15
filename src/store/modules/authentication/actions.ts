import { User } from './types'

export function signInRequest(
  email: string,
  password: string
): {
  type: string
  payload: {
    email: string
    password: string
  }
} {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  }
}

export function signInSuccess(
  user: User,
  token: string
): {
  type: string
  payload: {
    user: User
    token: string
  }
} {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token }
  }
}

export function signInFailure(): { type: string } {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  }
}

export function forgotPasswordEmailRequest(
  email: string
): {
  type: string
  payload: {
    email: string
  }
} {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_REQUEST',
    payload: { email }
  }
}

export function forgotPasswordEmailSuccess(): { type: string } {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_SUCCESS'
  }
}

export function forgotPasswordEmailFailure(): { type: string } {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_FAILURE'
  }
}

export function resetPasswordRequest(
  password: string,
  recoveryToken: string
): {
  type: string
  payload: {
    password: string
    recoveryToken: string
  }
} {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { password, recoveryToken }
  }
}

export function resetPasswordSuccess(): { type: string } {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS'
  }
}

export function resetPasswordFailure(): { type: string } {
  return {
    type: '@auth/RESET_PASSWORD_FAILURE'
  }
}

export function signOut(): { type: string } {
  return {
    type: '@auth/SIGN_OUT'
  }
}
