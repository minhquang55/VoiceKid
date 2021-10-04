import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Danh sách đăng ký',
    to: '/register-list',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  }
]

export default _nav
