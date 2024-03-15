import { createContext, useContext, useState } from "react";

export const Contexto = createContext(null)

const Memoria = ({children}) => {

    const [authorized, setAuthorized] = useState(false)
    const [newUserWindow, setNewUserWindow] = useState(false)
    const [token, setToken] = useState('')

    return(
        <Contexto.Provider value={[authorized, setAuthorized, token, setToken,newUserWindow, setNewUserWindow]}>
            {children}
        </Contexto.Provider>
    )
}

export default Memoria;