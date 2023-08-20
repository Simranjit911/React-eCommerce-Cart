import  { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Darkmodee from "./Darkmode";

const Navbar = () => {
  let nav=useNavigate()
  let {setproducts,cart}=useContext(userContext)
    let [val,setval]=useState("")
async function findData(){
let res=await fetch(`https://dummyjson.com/products/search?q=${val}`)
let prod=await res.json()
setproducts(prod.products)

console.log(prod)
}
function updateVal(e){
setval(e.target.value)

}
function homeF(){
  nav("/")
  findData()
  setval("")
}

  return (
    <nav className=" flex flex-col gap-2 items-center justify-evenly bg-gray-300 py-3 shadow-lg mb-5 md:flex-row">
      <h2 className="font-bold text-2xl">Logo</h2>
      <div className="flex gap-2 w-[40vw] items-center justify-center ">
        <input
          type="search"
          placeholder="Search here..."
          className="flex outline-none border-2 py-1 px-1 rounded-md hover:border-purple-400 md:px-2 "
        value={val}
        onChange={updateVal}

        />
        <button onClick={findData} className="py-1 px-2 rounded-md active:scale-90 ease-in duration-100 bg-slate-700 text-white hover:bg-purple-300">
          Search
        </button>
      </div>
      <ul className="flex gap-6 justify-evenly items-center">
        <Link to={"/"}>
        <li className=" font-semibold hover:scale-125 ease-in duration-100 cursor-pointer" onClick={homeF}>
          Home
        </li>
        </Link>
        <Link to={"/cart"}>
        <li className="font-semibold hover:scale-125 ease-in duration-100 cursor-pointer">
          Cart {cart.length<=0?"":`(${cart.length})`}
        </li>
        </Link>
       
        <li>
      <Darkmodee className="z-50"/>
        </li>
          

      </ul>
    </nav>
    
  );
};

export default Navbar;
