import React, { createContext, useState } from "react"

export const AppContext = createContext()


const AppContextProvider = ({children}) => {
    const [name,setName] = useState(null)
    const [token,setToken] = useState(null)

    const handleLogin = (res) => {
        setName(res.name)
        setToken(res.token)
    }

   const handleSingOut = () => {
       localStorage.setItem("token",null)
       setName(null)
       setToken(null)
   }

    return(
        <AppContext.Provider
            value  = {{name,handleLogin,token,handleSingOut}}>
            {children}
        </AppContext.Provider>
     )
}

export {AppContextProvider}