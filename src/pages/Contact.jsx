import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { quotes } from '../assets/quotes.js';

const Contact = () => {
  const [data, setData] = useState({user_name:"",user_email:"",user_message:""});
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length))
  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length))
  },[]); 

  const handleChange = (e)=>{
    console.log(e)
    setData({...data,[e.target.name]:e.target.value});
  }

  const sendEmail = ()=>{
    console.log('sending email',data)
    if(data.user_name === "" || data.user_email === "" || data.user_message === ""){
      alert('Please fill all the fields')
      return
    }
    emailjs
      .send('service_tjadpar', 'template_8r7xjtg', data, 'Juuw-QfqePGHa2mhE')
      .then(
        () => {
          setData({user_email:"",user_name:"",user_message:""})
          console.log('SUCCESS!');
          alert('Message sent successfully')
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }
  return (
    <div className='sm:my-10 my-6'>
      <div className='flex gap-0 sm:gap-4 sm:items-start sm:flex-row flex-col-reverse'>
        {/* contact form */}
        <div className="sm:flex-1 px-4 py-8">
          <h1 className="text-center text-xl text-accent-taupe uppercase tracking-wide font-semibold">Contact Me</h1>
          <input name='user_name' value={data.user_name} onChange={handleChange} type="text" className='block shadow-soft bg-transparent placeholder:text-accent-taupe text-accent-taupe w-full caret-accent-taupe rounded-md p-2 mt-4' placeholder='Enter your name . . .'/>
          <input name='user_email' value={data.user_email} onChange={handleChange} type="email" className='block w-full shadow-soft bg-transparent placeholder:text-accent-taupe text-accent-taupe rounded-md caret-accent-taupe p-2 my-4' placeholder='Enter your email . . .'/>
          <textarea name='user_message' value={data.user_message} onChange={handleChange} type="text" className='block w-full shadow-soft bg-transparent placeholder:text-accent-taupe text-accent-taupe rounded-md caret-accent-taupe p-2' placeholder='Enter your message . . .'/>
          <button onClick={sendEmail} className='w-full bg-primary-event hover:bg-accent-taupe text-accent-taupe hover:text-primary-background shadow-soft rounded-md p-2 uppercase tracking-wider font-semibold mt-4'>Submit</button>
        </div>
        {/* Details */}
        <div className='sm:flex-1 bg-accent-taupe text-primary-background text-sm sm:text-lg shadow-soft rounded-md px-4 py-8'>
          <h1 className="text-center text-xl uppercase tracking-wide font-semibold">Personal Information</h1>
          <p className='mt-2'>Name: Manu kashyap</p>
          <p className='my-2 overflow-clip'>Email: kashyap.manu200201@gmail.com</p>
          <p className=''>Mobile Number: 8307752839</p>
          <p className="my-2">Date of Birth: April 01, 2002</p>
          <p className="">Work Location: Currently working in Gurugram, Haryana</p>
        </div>
      </div>
      {/* <p className='text-center italic'>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ipsa accusantium, repellat reprehenderit dicta voluptates.&ldquo;</p> */}
      <p className='text-center text-sm sm:text-md sm:mt-12 mt-0 italic'>&ldquo;{quotes[quoteIndex].quote}&ldquo; - {quotes[quoteIndex].author}</p>
    </div>
  )
}

export default Contact