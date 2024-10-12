import { useContext, useState } from "react";
import { CounterContext } from "../../Provider/Counter";

const Home = () => {
    const {provCount , setProvCount} = useContext(CounterContext)
    console.log(provCount)
    const [count ,setCount] = useState(0)
    const [newCount ,setNewCount] = useState(0)
    return (<>
    <h1>This is From Home</h1>
<div className="border-2 border-black">
<h1>Count : {count}</h1>
<button onClick={() => setCount(count + 1)}>plus</button>
</div>
<div className="border-2 border-black">
<h1>Count : {newCount}</h1>
<button onClick={() => setProvCount(provCount + 1)}>plus</button>
</div>
    </>)
}
export default Home ;