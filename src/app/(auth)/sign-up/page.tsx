"use client"
 
import { authClient } from '@/lib/auth-client';
import FormLayout from '@/components/layouts/FormLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {z} from 'zod';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const formSchema = z
    .object({
        name: z.string().min(2,{
            message:"Name must be atleast 2 characters!"
        }),
        email: z.string().email({
            message:"Enter a valid email!"
        }),
        password: z.string().min(6,{
            message:"Password must be atleast 6 characters!"
        }),
        confirmPassword: z.string(),
    })
    .refine((data)=> data.password === data.confirmPassword, {
        message:"Password do not match!",
        path:["confirmPassword"],
    })

    type FormData = z.infer<typeof formSchema>

export default function SignupPage() {
    const router = useRouter()
     const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<FormData>({
    resolver:zodResolver(formSchema),
    mode: "onChange"
});

    const onSubmit = async (data:FormData)=>{
        const {error} = await authClient.signUp.email({
                name:data.name,
                email:data.email,
                password:data.password
            });

            if(error){
              toast.error(error.message as string);
              return;
            }
            toast.success("Registration Successful")
            router.push("/sign-in");
    };
  return (    
      <FormLayout title='Create an account' subTitle='Signup to get started'>
          <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
             <div>
            <label className='block text-sm text-gray-300 mb-1'>Name</label>
            <input 
            {...register("name")}
            type="text" 
            placeholder='Fazal Karim' 
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 
             ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-teal-500"}`}
           />
            {errors.name && <p className='text-xs text-red-400'>{errors.name.message}</p>}
        </div>
        <div>
            <label className='block text-sm text-gray-300 mb-1'>Email</label>
            <input 
            {...register("email")}
            type="email" 
            placeholder='fazal23@gmail.com' 
             className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 
             ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-teal-500"}`}
           />
            {errors.email && <p className='text-xs text-red-400'>{errors.email.message}</p>}
        </div>
         <div>
            <label className='block text-sm text-gray-300 mb-1'>Password</label>
            <input 
            {...register("password")}
            type="password" 
            placeholder='**********' 
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 
             ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-teal-500"}`}
           />
            {errors.password && <p className='text-xs text-red-400'>{errors.password.message}</p>}
            </div>
        <div>
            <label className='block text-sm text-gray-300 mb-1'>Confirm Password</label>
            <input 
            {...register("confirmPassword")}
            type="password" 
            placeholder='**********' 
            className={`w-full rounded-lg bg-gray-800 border px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 
             ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-teal-500"}`}
           />
            {errors.confirmPassword && <p className='text-xs text-red-400'>{errors.confirmPassword.message}</p>}
            </div>

        <button 
        disabled={isSubmitting}
          type='submit' 
          className='w-full cursor-pointer bg-teal-500 hover:bg-teal-600 transition text-white font-medium py-2.5 rounded-lg flex items-center justify-center disabled:opacity-70'
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
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
          Already have an account?{"  "}
          <Link href="/sign-in" className="text-teal-400 hover:text-teal-300">
            Sign In
          </Link> 
        </p>
      </FormLayout>

    
  )
}

