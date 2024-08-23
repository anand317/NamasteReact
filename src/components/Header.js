import { Logo } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ()=> {

    const [btnName,setBtnName] =useState('Login')

    const {onlineStatus} = useOnlineStatus();

    const cart=useSelector((state)=>state.card.items)

    console.log(cart)

    useEffect(()=>{
        console.log("effect render")
    },[btnName])
    return(
        <div className="flex justify-between bg-center bg-pink-100 shadow-lg m-2">
            <div className='logo-container'>
                <img className='w-28 rounded-sm' src={Logo} alt='logo'/>
            </div>
            <div className='flex justify-center'>
                <ul className="flex p-5 m-4">
                    <li className="px-4">Online status: {onlineStatus? "✅" :"🔴"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactus">Contact Us</Link> 
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart - {cart.length}</Link>
                    </li>
                    <button className="px-4" onClick={()=> btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login')} >{btnName}</button>

                </ul>

            </div>
            
        </div>
    )
 }

 export default Header;