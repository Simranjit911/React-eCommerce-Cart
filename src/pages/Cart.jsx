
import userContext from "../../context/UserContext";
import { useContext } from "react";
import Footer from '../components/Footer';
const Cart = () => {
const {cart,cal,remove}=useContext(userContext)

  return (
    <>   
    <div className=" lg:w-[70vw] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 justify-center items-center  ">
    {cart.length<=0?<h1 className='flex font-bold text-2xl  justify-center w-[100vw] sm:w-[70vw]'>Nothing in Cart</h1>:
        cart.map((prod) => {
          return (
            <>
              <div className="flex flex-col mx-auto  w-[80vw] lg:w-[20vw] bg-gray-300 text-left shadow-2xl rounded-lg overflow-hidden min-h-full justify-between">
              <div className="max-h-45 min-h-full ">
                    <img
                      src={prod.image}
                      alt=""
                      className=" rounded-lg rounded-bl-none rounded-br-none hover:scale-105 ease-out duration-100 max-h-48 flex  mx-auto z-0"
                    />
                  </div>
                <div className=" m-2 p-2 ">
                  <h2 className="text-2xl font-bold">{prod.title}</h2>
                  <p className="text-sm font-semibold text-slate-900">
                    {prod.description}
                  </p>
                  <div className="flex justify-between mt-3 ">
                    <span className="text-xl font-bold ">$ {prod.price} </span>
                    <button onClick={()=>{remove(prod) 
                    cal(cart)}} className="bg-gray-800 px-1 py-1 text-white font-semibold rounded-md hover:scale-95 duration-75 ease-in shadow-xl active:text-black active:bg-slate-100">
                    Remove from cart
                  </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
</div>
<Footer />
    </>
  )
}

export default Cart