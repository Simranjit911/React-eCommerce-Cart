
import { useEffect, useState } from "react";

import {Dna} from "react-loader-spinner" 
import userContext from "../../context/UserContext";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
  const {products,setproducts,addtoCart,cal,cart}=useContext(userContext)
    let [load,setload]=useState(true)
  useEffect(() => {
    getdata();
  }, []);
  
  async function getdata() {
    const res = await fetch("https://fakestoreapi.com/products");
    const dt = await res.json();
    console.log(dt);
    setproducts(dt);
    setTimeout(() => {
    }, 500); 
    setload(false)
  }

  return (
    <>
 
    <div className=" lg:w-[70vw] mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 justify-center items-center  ">
        {load?
        <div className="flex justify-center text-center w-[70vw] h-screen">

        <Dna
        visible={true}
        height="80"
        width="80"        
        ariaLabel="dna-loading"
        wrapperStyle={{margin:"10 auto"}}
        wrapperClass="dna-wrapper"
       
        />
        </div>
        :
      products.map((prod) => {
        return (
          <>
            <div className="flex flex-col mx-auto  w-[80vw] lg:w-[20vw] bg-gray-300 text-left shadow-2xl rounded-lg overflow-hidden min-h-full justify-between" key={prod.id}>
            <div className="max-h-45 min-h-full ">
                  <img
                    src={prod.image}
                    alt=""
                    className=" rounded-lg rounded-bl-none rounded-br-none hover:scale-105 ease-out duration-100 max-h-48  flex mx-auto z-0"style={{zIndex:0}}
                  />
                </div>
              <div className=" m-2 p-2 ">
                <h2 className="text-2xl font-bold">{prod.title}</h2>
                <p className="text-sm font-semibold text-slate-900">
                  {prod.description}
                </p>
                <div className="flex justify-between mt-3 ">
                  <span className="text-xl font-bold ">$ {prod.price} </span>
                  <button onClick={()=>{addtoCart(prod) 
                    cal(cart)
                    toast.success("Added to cart",{duration:1000})}} className="bg-gray-800 px-1 py-1 text-white font-semibold rounded-md hover:scale-95 duration-75 ease-in shadow-xl active:text-black active:bg-slate-100">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
<Toaster/>
    </div>
    </>

  );
};

export default Home;
