import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
     <div className='text-4xl text-center bg bg-red-800'>Riaz Ahmad Arrain</div>
      <div>
           <div className='text-2xl text-blue-600 font-semibold bg bg-purple-400'>
             <Link href="name\father">Father</Link>
           </div>
           <div className='text-2xl text-blue-800 font-semibold bg bg-orange-400'>
             <Link href="name\father\child">Child</Link>
           </div>
           <div className='text-2xl text-white font-semibold bg bg-green-800'>
             <Link href="name\father\child\contact-me">Call us</Link>
           </div>
           <div className='text-2xl text-black font-semibold bg bg-pink-600 '>
             <Link href="name\father\child\contact-me\country">Country</Link>
         </div>
      </div>
    </div>
  )
}

export default page