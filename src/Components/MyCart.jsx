import { useContext } from "react"
import PhoneHunter from "./PhoneHunter"
import { CounterContext } from "../Provider/Counter"

const MyCart = ({phone, index}) => {
    const {provCount , setProvCount} = useContext(CounterContext)
    console.log(provCount)
    return ( <>
    
    <h1>{index + 1} . {phone.phone_name}</h1>
   {/* <PhoneHunter/> */}
   {/* <PhoneHunter phoneName={phone.phone_name}></PhoneHunter> */}
   <button onClick={() => setProvCount(phone.phone_name)}>plus</button>
    </>)
}
export default MyCart