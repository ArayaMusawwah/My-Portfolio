import React, { createContext, useState } from "react"

interface ActiveContextType {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ActiveContext = createContext<ActiveContextType>({
  isActive: true,
  setIsActive: () => {}
})

export const ActiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  )
}
