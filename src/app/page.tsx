import Image from "next/image";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Homepage from "./components/Homepage";
import Product from "./components/Product";
export default function Home (){
  return(
    <div>
    <Hero />
    <Homepage />
    <Product />
     <Cart />
     <Account /> 
    </div>
  )
}
