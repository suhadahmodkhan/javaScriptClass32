import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import { useContext, useEffect } from "react";
import { CounterContext } from "../../Provider/Counter";
const Navbar = () => {
    const {logOut,user} = useContext(CounterContext)
    console.log(user)
    const navigate = useNavigate()
const handleLogOut = () => {
   logOut().then(() => {
        // Sign-out successful.
       console.log("Sign-out successful")
      }).catch((error) => {
        // An error happened.
      });
}

    return ( 
        <div>
<div className="flex justify-between items-center">
    <figure>
    <img src="https://i.postimg.cc/JnhQ52t2/Logo.png" alt="" />
    </figure>

    <div className="flex gap-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/statictics">Statictics</Link>
        {
            user?.email ? (
                <button onClick={handleLogOut}>Log out</button>
            ) : (
                <Link to="/login">Login</Link>
            )
        }
        
            </div>
</div>
<Outlet/>
     </div>
    )
}
export default Navbar ;