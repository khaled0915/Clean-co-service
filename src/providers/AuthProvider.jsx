import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../config/firebase.config";


export const AuthContext = createContext();



const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null);

    const [isLoading , setIsLoading] = useState(null)



    const createUser = (email , password) =>{
        setIsLoading(true)
       return createUserWithEmailAndPassword(auth, email ,password)

    }

    const logIn = (email , password) =>{
        setIsLoading(true)

       return signInWithEmailAndPassword(auth, email ,password)

    }


    useEffect(()=>{


  const subscribe =      onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setIsLoading(false)


            
          });


          return ( )=>{
            return subscribe()
          }



    },[])


    

    const values = {createUser , logIn , user , isLoading}
    return (
        <AuthContext.Provider value={values}>

            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;