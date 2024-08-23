import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import ContactUs from './ContactUs'
import { removeItem } from '../utils/cardSlice'
import { clearCart } from '../utils/cardSlice'

const Cart = () => {

    const item=useSelector((state)=>state.card.items)

    const dispatch=useDispatch();

    handleClick = () =>{
        dispatch(clearCart())
    }

    console.log(item)
  return (
    <div className=' flex-col text-center p-4 m-4 w-auto h-1 space-x-0 justify-between'>
        <button className='bg-black text-white p-2 m-2 rounded-md' onClick={handleClick}> Clear Cart</button>
        <ItemList Item={item}/> 
    </div>
  )
}

export default Cart