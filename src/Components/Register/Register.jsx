import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../../Provider/Counter";

const Register = () => {
  const {signUp} = useContext(CounterContext)
  const navigate = useNavigate()
    const handleForm = (event) => {
      event.preventDefault();
        console.log("handle form click")
        const email = event.target.email.value ;
        const password = event.target.password.value ;
        console.log(email , password)
        signUp(email,password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          navigate("/")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    return (
        <>
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleForm}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
export default Register