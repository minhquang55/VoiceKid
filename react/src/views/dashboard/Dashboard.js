import React, { lazy } from 'react'
import { Redirect } from 'react-router'

const Dashboard = () => {
  return (
    <>
      <Redirect to="/register-list" />
      <h1>Voicekid Admin</h1>
    </>
  )
}

export default Dashboard
