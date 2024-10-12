import { useContext, useEffect, useState } from "react"
import { jsx } from "react/jsx-runtime"
import MyCart from "./MyCart"
import { CounterContext } from "../Provider/Counter"

const PhoneHunter = ({phoneName}) => {
  const {provCount , setProvCount} = useContext(CounterContext)
  console.log(provCount)
    const [searchText, setSearchText] = useState('iphone')
    const [phones, setPhones] = useState([])
    const [ showAll, setShowAll] = useState(true)
    const [cart , setCart] = useState([])
    // const [localCart , setLocalCart] = useState()
    // console.log(localCart.length)
    // console.log(cart.length)
    useEffect(() => {
    const localCart =  localStorage.getItem("cart")
    setCart(JSON.parse(localCart))

    // setLocalCart(localCart)
    },[])
    //  console.log(phones)
    const handleSearch = () => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText  }`)
        .then(response => response.json())
        .then(data => {
            let phones = data.data ;
           
            if(phones.length > 9 ){
                setShowAll(false)
            }
            phones = phones.slice(0,9)
            
            setPhones(phones)
        })
    }
   const addToCart = (phone) => {
    console.log("add to cart" ,phone)
    const newCart = [...cart,phone]
    localStorage.setItem("cart" , JSON.stringify(cart))
    setCart(newCart)
    
   }
    const handleShowAll = () => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => {
            let phones = data.data ;
            setShowAll(true)
            setPhones(phones)
        })
    }
    return (
        <>
        <h1>This is phone  Name : {phoneName} </h1>
        
        <div className="flex gap-5  justify-center my-20">
            <input type="text" className="border-2 border-black pl-2" onChange={(e) => setSearchText(e.target.value)} />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>

          
        </div>
        <h1> My cart  : {cart.length}</h1>
        {
            cart.map((phone,index) => <div key={index}>
                <MyCart phone={phone} index={index} />
            </div>)
        }
        <div className="grid grid-cols-3 gap-5">
                {
                    phones.map(phone => <div key={phone.slug}>
                        {/* {console.log(phone)} */}
                       <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={phone.image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex flex-col justify-center">
    <h2 className="card-title text-center flex justify-center">{phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <div className="card-actions justify-center">
    <button className="btn btn-accent text-white" onClick={() => addToCart(phone)}>Add to Cart</button>
      <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Show Details</button>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <figure>
    <img
      src={phone.image}
      alt="Shoes" />
  </figure>
    <h3 className="font-bold text-lg">{phone.phone_name}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action justify-center">
       
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
                        <h1></h1>

                    </div>)
                }
            </div>
            <button className={`btn btn-success mt-5 text-white ${ showAll === true ? 'hidden': 'inline'}`} onClick={handleShowAll}>Show All</button>
        </>
    )
}

export default PhoneHunter