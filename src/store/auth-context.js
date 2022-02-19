import React, {useState} from 'react'
const AuthContext= React.createContext({
    token: '',
    isLogedIn: false,
    login: (token)=> {},
    logout: ()=> {}
})



export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const isUserLogedIn = !!token;
    const loginHanlder =(token)=> {setToken(token); }
    const logoutHanlder =()=> {setToken(null)}
    const contextValue = {
        token: token,
        isLogedIn: isUserLogedIn,
        login: loginHanlder,
        logoutHanlder: logoutHanlder
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;