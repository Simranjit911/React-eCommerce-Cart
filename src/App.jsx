import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import Cart from "./pages/Cart";

import userContext from "../context/UserContext";

import { toast,Toaster } from "react-hot-toast";



export default function App() {
  const [data, setdata] = useState([]);
  const  [products,setproducts]=useState("Sim")
  const [cart,setcart]=useState([])
  function addtoCart(product){

    setcart([...cart,product])
  }
  let [price,setprice]=useState(0)
    function cal(cart){
      console.log(cart)
      let iv=0
   for (let i=0;i<cart.length;i++){
    iv+=parseFloat( cart[i].price)
   }
   
    setprice(iv)
   }
   function remove(product){
    let newarr=cart.filter((i)=>i.id!=product.id)
    setcart(newarr)
    toast.success("Removed From Cart",{duration:1000})

   }

  return (
    <>
    <userContext.Provider value={{products,setproducts,cart,setcart,addtoCart,cal,price,remove}}>

    <Navbar setdata={setdata}/>    
    <Routes>
    <Route path="/" element={ <Home  />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="*" element={ <Home data={data} setdata={setdata} />} />
  
    </Routes>
    <Toaster/>
    
    </userContext.Provider>
    </>
  )
}