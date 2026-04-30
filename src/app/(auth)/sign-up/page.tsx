import FormLayout from '@/components/layouts/FormLayout';
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import z from 'zod';

const formSchema = z
    .object({
        name: z.string().min(2,{
            message:"Name must be atleast 2 characters!"
        }),
        email: z.email({
            message:"Enter a valid email!"
        }),
        password: z.string().min(6,{
            message:"Password must be atleast 10 character!"
        }),
        confirmePassword: z.string(),
    })
    .refine((data)=> data.password === data.confirmePassword, {
        message:"Password do not match!",
        path:["Confirme Password"],
    })

const SignupPage = () => {
  return (
    
      <FormLayout title='Create an account' subTitle='Signup to get started'>
          <form className='space-y-5'>
             <div>
            <label className='block text-sm text-gray-300 mb-1'>Name</label>
            <input type="text" placeholder='Fazal Karim' className='w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 border-gray-700 focus:ring-teal-500' />
        </div>
        <div>
            <label className='block text-sm text-gray-300 mb-1'>Email</label>
            <input type="email" placeholder='fazal23@gmail.com' className='w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 border-gray-700 focus:ring-teal-500' />
        </div>
         <div>
            <label className='block text-sm text-gray-300 mb-1'>Password</label>
            <input type="password" placeholder='**********' className='w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 border-gray-700 focus:ring-teal-500' />
        </div>
        <div>
            <label className='block text-sm text-gray-300 mb-1'>Confirm Password</label>
            <input type="password" placeholder='**********' className='w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 border-gray-700 focus:ring-teal-500' />
        </div>

        <button type='submit' className='w-full cursor-pointer bg-teal-500 hover:bg-teal-600 transition text-white font-medium py-2.5 rounded-lg flex items-center justify-center disabled:opacity-70'>
            Sign Up
        </button>
          </form>

          {/* Divider  */}
        <div className='my-6 flex items-center gap-2'>
           <div className='flex-1 h-px bg-gray-800'/>
            <span className='text-xs text-gray-500'>
                 OR CONTINUE WITH 
            </span>
            <div className='flex-1 h-px bg-gray-800'/>
        </div>   

        {/* Social Auth */}
        <div className='grid grid-cols-2 gap-3'>
            <button type='button' className='cursor-pointer flex items-center justify-center gap-2 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition text-white py-2.5 rounded-lg text-sm'>
               <FcGoogle className='w-5 h-5'/>
               Google
            </button>
            <button type='button' className='cursor-pointer flex items-center justify-center gap-2 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition text-white py-2.5 rounded-lg text-sm'>
               <FaFacebook className='w-5 h-5'/>
               Facebook
            </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don&apos;t have an account?{"  "}
          <a href="/sign-up" className="text-teal-400 hover:text-teal-300">
            Sign up
          </a> 
        </p>
      </FormLayout>

    
  )
}

export default SignupPage;
