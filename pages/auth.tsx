import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'

const auth = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');

  const [variant,setVariant] = useState('login')
 
  return (
    <div className='relative h-full w-full bg-neutral-900'>
        <nav className='px-12 py-5'>
            <img src="/images/logo.png" alt="logo" className='h-14'/>
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              Sign in
            </h2>
            <div className='flex flex-col gap-4'>
              <Input
              label='Email'
              onChange={(ev:any)=> setEmail(ev.target.value)}
              id='email'
              type='email'
              value={email}
              />
              <Input
              label='Password'
              onChange={(ev:any)=> setPassword(ev.target.value)}
              id='password'
              type='password'
              value={password}
              />
            </div>
            <button className='bg-slate-500 py-3 text-white rounded-md w-full mt-10 hover:bg-slate-700 transistion'>
              Login 
            </button>
          </div>
        </div>
    </div>                       
  )
}

export default auth