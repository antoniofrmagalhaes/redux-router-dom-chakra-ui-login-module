import React from 'react'

import { Link } from './styles'

interface ForgotPasswordLinkProps {
  to: string
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({
  to,
  children
}) => {
  return <Link to={to}>{children}</Link>
}

export default ForgotPasswordLink
