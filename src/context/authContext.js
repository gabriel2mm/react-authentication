import React, { createContext, useState } from 'react'
import * as authService from '../services/authService'
import api from '../services/api'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const getUserSigned = localStorage.getItem("userSigned")
  const [error, setError] = useState(null)
  const [signed, setSigned] = useState(getUserSigned ? getUserSigned : false);
  async function signIn(values) {
    try{
      const response = await authService.signIn(values);
      const {auth, token} = response.data;
      if(auth && token){
        localStorage.setItem("userSigned", auth)
        setSigned(auth);
        api.defaults.headers['Authorization'] = `Bearer ${token}`
      }
    }catch(e){
      setError("Credenciais inválidas. Tente novamente.");
    }
  }

  function logout(){
    localStorage.removeItem("userSigned")
    setSigned(false);
    setError(null);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, error, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;