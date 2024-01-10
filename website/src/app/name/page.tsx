import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
     <div  className='text-5xl gb bg-blue-400 font-bold text-red-600'>Riaz Ahmad Arrain</div>
         <div className='text-5xl gb bg-green-600 font-bold text-white' >
         <Link href="name\father">Father</Link>
         </div>
        <div className='text-5xl gb bg-red-400 font-bold text-black'>
        <Link href="name\father\child">Child</Link>
        <div className='text-5xl gb bg-yellow-300 font-bold text-blue-600'>
        <Link href="name\father\child\contact-me">Call us</Link>
        </div>
        </div>
        
    </div>
  )
}

export default page