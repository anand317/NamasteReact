import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <h1>
        Contact Us 
      </h1>
      <form className='p-2'>
        <input className="border border-black p-2 m-2" type="text" placeHolder="name"/>
        <input className="border border-black p-2 m-2" type="text" placeHolder="message"/>
        <button className='p-2 m-2 bg-black text-white rounded-md'>
          save
        </button>
      </form>

    </div>
  )
}

export default ContactUs;

