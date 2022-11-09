import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(1)

  const toggleTab = (index) => {
    setToggle(index)
  }

  return (
    <AppContext.Provider
      value={{
        toggle,
        toggleTab,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
