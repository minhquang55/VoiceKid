import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Regist List
const RegistList = React.lazy(() => import('./views/regist_list/RegistList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/register-list', exact: true, name: 'Regist List', component: RegistList },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
]

export default routes
