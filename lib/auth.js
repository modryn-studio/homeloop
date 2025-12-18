"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load from localStorage on mount (client-side only)
    const savedToken = localStorage.getItem("homeloop_token")
    const savedUserType = localStorage.getItem("homeloop_user_type")
    const savedUserId = localStorage.getItem("homeloop_user_id")
    
    if (savedToken && savedUserType) {
      setToken(savedToken)
      setUserType(savedUserType)
      setUser({ token: savedToken, userType: savedUserType, userId: savedUserId })
    }
    setLoading(false)
  }, [])

  const login = (newToken, newUserType, userId) => {
    localStorage.setItem("homeloop_token", newToken)
    localStorage.setItem("homeloop_user_type", newUserType)
    localStorage.setItem("homeloop_user_id", userId)
    setToken(newToken)
    setUserType(newUserType)
    setUser({ token: newToken, userType: newUserType, userId })
  }

  const logout = () => {
    localStorage.removeItem("homeloop_token")
    localStorage.removeItem("homeloop_user_type")
    localStorage.removeItem("homeloop_user_id")
    setToken(null)
    setUserType(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, userType, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
