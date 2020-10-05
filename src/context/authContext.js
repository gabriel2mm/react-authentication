import React, { createContext, useState, useEffect } from 'react'
import * as authService from '../services/authService'
import api from '../services/api'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function setUser() {
      const storageAuth = sessionStorage.getItem("@USER:Auth");
      const storageToken = sessionStorage.getItem("@USER:Token");

      if (storageAuth && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`
        setError(null);
        setSigned(storageAuth);
      }
    }
    setUser();
  }, []);

  async function signIn(values) {
    try {
      const response = await authService.signIn(values)
      const {auth, token} = response.data;
      sessionStorage.setItem("@USER:Token", token)
      sessionStorage.setItem("@USER:Auth", auth)
      api.defaults.headers.Authorization = `Bearer ${token}`
      setError(null);
      setSigned(auth);
    } catch (e) {
      setError("Credenciais inválidas. Tente novamente.");
    }
  }

  function logout() {
    sessionStorage.removeItem("@USER:Token")
    sessionStorage.removeItem("@USER:Auth")
    setError(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, logout, error  }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;