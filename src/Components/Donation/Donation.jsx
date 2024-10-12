import { useState } from "react";

const Donation = () => {
    const [count ,setCount] = useState(0)
    return (<>
    <h1>This is From Donation</h1>
    <h1>Count : {count}</h1>
    <button onClick={() => setCount(count + 1)}>plus</button>
    </>)
}
export default Donation ;