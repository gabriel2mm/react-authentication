import React, {useContext}from 'react'
import AuthContext from '../../context/authContext'

function Dashboard() {
  const {logout} = useContext(AuthContext)

  function teste(e){
    console.log("logout")
    logout();
  }

  return (
    <span onClick={e => teste(e)}>Logout</span>
  )
}

export default Dashboard;