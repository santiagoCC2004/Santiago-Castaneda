import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";



export const AuthContext = createContext();

export const useAuth= ( )=> {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [isAuthenticathed, setIsAuthenticathed] = useState(false);
    const [errors, setErrors] = useState([]);


    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res);
            setuser(res.data);
            setIsAuthenticathed(true);
        } catch (error) {
            setErrors(error,response.data);
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{ 
            signup,
            user,
            isAuthenticathed,
            errors
            }}>
                {children}
            </AuthContext.Provider>
            
    )
        }
            

