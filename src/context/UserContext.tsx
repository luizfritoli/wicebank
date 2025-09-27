"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { User } from "@/lib/user"

type UserContextType = {
  actualUser: User | null
  setActualUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [actualUser, setActualUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ actualUser, setActualUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error("useUser deve ser usado dentro de UserProvider")
  return context
}