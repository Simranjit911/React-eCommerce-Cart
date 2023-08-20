
import userContext from "../../context/UserContext";
import { useContext } from "react";
const Footer = () => {
    const {cart,cal,price}=useContext(userContext)
   cal(cart)
   
  return (
    <footer>
        <div className='text-center fixed bottom-0 left-0 w-[100vw] bg-slate-800 text-white shadow-2xl h-12 px-5 py-2 mt-7'>
        <h3 className='text-2xl'>Total:${price}</h3>

        </div>


    </footer>
  )
}

export default Footer