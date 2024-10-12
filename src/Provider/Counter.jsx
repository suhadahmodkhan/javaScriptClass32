import { createContext, useEffect, useState } from "react"
import auth from "../../firebase.config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"


export const CounterContext = createContext()

const Counter= ({children}) => {
    const [count ,setCount] = useState(0)
    const [ provCount , setProvCount ] = useState('nothing')
    const [user, setUser] = useState()
    console.log(user)


    const signIn = (email , password) => {
    return  signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const signUp = ( email, password) => {
        return createUserWithEmailAndPassword(au,email,password)
    }
   useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          setUser(user)
        
          // ...
        } else {
          // User is signed out
          // ...
          setUser()
        }
      });
      return () => unSubscribe()
   }

    ,[])
   
    console.log(provCount, count)
const info={
provCount,
setProvCount,
signIn,
logOut,
signUp,
user,
setUser
}
return <CounterContext.Provider value={info}>{children}</CounterContext.Provider>


}
export default Counter ;