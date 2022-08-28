import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import EasyHTTP from '../../../helpers/easyHttp'

const simpleHttp =  new EasyHTTP()

function LoginForm() {
const router = useRouter()

const handleLogin = async(e)=>{
try {
 e.preventDefault()
 const email =   e.target.email.value
 const password =   e.target.password.value
 const data = {email,password} 
 const res = await simpleHttp.postNoAuth('/api/v1/all/login',data)
 if(res.status == true){

e.target.email.value = null
e.target.password.value = null
   //handle confirmation here  &isFullyReg=true
  
   if(res.user.cv !== null){
    router.push(`/stepForm/?welcome=${res.token.token}&isFullyReg=true`)
   }else{
    router.push(`/stepForm/?welcome=${res.token.token}`)
   }
  
   }else{toast.error(res.message)}
    
} catch (error) {
    const message =  error.message
    toast.dark(`${message}, check your Internet Connection`) 
}
}


  return (
    <>
       <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
   
        <div className="h-full m-0 grid">
        <div className="relative pt-4 pb-2
                        before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto space-y-4 md:w-8/12 lg:w-full">
                    <img src="images/droomlogo.png" loading="lazy" className="block w-10 mx-auto " alt="tailus logo" />
                    <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
                        <div className="lg:grid lg:grid-cols-2">
                            <div className="rounded-lg lg:block" hidden>
                                <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/60d1920fb369343119a7c17e_5ef62de4a589e2e0ab51f674_image-min.jpg" loading="lazy" height="100%" width="100%" alt="droomwork" />
                            </div>
                            <div className="p-6 sm:p-16">
                                <h2 className="mb-8 text-2xl text-[#001935] font-bold">Sign in to your account</h2>
                                <form onSubmit={handleLogin} className="space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-gray-700">Email</label>
                                        <input  type="email" name="email" id="email" 
                                            className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label for="pwd" className="text-gray-700">Password</label>
                                            <button className="p-2 -mr-2" type="reset">
                                                <span className="text-sm text-[#F49038]">Forgot your password ?</span>
                                            </button>
                                        </div>
                                        <input  type="password" name="password" id="pwd" 
                                                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                                    focus:ring-2 focus:ring-sky-300 focus:outline-none
                                                    invalid:ring-2 invalid:ring-red-400"
                                        />
                                    </div>

                                    <button type="submit" 
                                            className="w-full py-3 px-6  font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                                        <span>Sign in</span>
                                    </button>

                                    <p className="border-t pt-6 text-sm">
                                        Don't have an account ? 
                                        <a href="#" className="text-[#F49038]">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center space-x-4">
                        <span>&copy; Droomwork</span>
                        <a href="#" className="text-sm hover:text-sky-900">Home</a>
                        <a href="#" className="text-sm hover:text-sky-900">Contact</a>
                    </div>
                </div>
            </div>
        </div> 
        </div>
                             
    </>
  )
}

export default LoginForm