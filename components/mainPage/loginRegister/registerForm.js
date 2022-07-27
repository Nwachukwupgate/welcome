import React, { useEffect, useState } from 'react'
import { useRegisterUserMutation } from '../../../reactWrapper/redux/apiSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'


function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [registerUser,{data, isSuccess, isError, error}] = useRegisterUserMutation();

    const router = useRouter()

    useEffect(() =>{
        // const userUrl = router.asPath.slice(12)
        const userUrl = router.asPath
        console.log(userUrl)
        if (typeof window !== "undefined") {
            window.localStorage.setItem('userPath', JSON.stringify(userUrl));
        }
    }, [router])
    

    const handleClick = async (e) => {
        e.preventDefault()
        if (email && password) {
            await registerUser({email, password})
        }else {
            toast("Please fill out email and password")
            console.log("no form filled")
        }
        console.log(data)
    }

    useEffect(() => {
        if(isSuccess) {
            toast(data.message)
            router.push('/stepForm')
        }
    }, [isSuccess]) 

    return (
        <>
            <ToastContainer />
            <div className="h-full m-0 grid">
                <div className="relative pt-4 pb-2
                        before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
                    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

                        <div className="m-auto space-y-4 md:w-8/12 lg:w-full">
                            <img src="images/droomlogo.png" loading="lazy" className="block w-10 mx-auto " alt="tailus logo" />
                            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
                                <div className="lg:grid lg:grid-cols-2">

                                    <div className="p-6 sm:p-16">
                                        <h2 className="mb-8 text-2xl text-[#001935] font-bold">Create an account</h2>
                                        <form onSubmit={handleClick} className="space-y-8">
                                            <div className="space-y-2">
                                                <label for="email" className="text-gray-700">Email</label>
                                                <input type="email" name="email" id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                                                />
                                            </div>

                                            <div>
                                                <div className="">
                                                    <label for="pwd" className="text-gray-700">Password</label>
                                                </div>
                                                <input type="password" name="pwd" id="pwd"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                                    focus:ring-2 focus:ring-sky-300 focus:outline-none
                                                    invalid:ring-2 invalid:ring-red-400"
                                                />
                                            </div>

                                            <button type="submit"
                                                onClick={handleClick}
                                                className="w-full py-3 px-6 rounded-md font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                                                <span>Sign up</span>
                                            </button>

                                            <p className="border-t pt-6 text-sm">
                                                Already have an account?
                                                <a href="#" className="text-[#F49038]">Sign in</a>
                                            </p>
                                        </form>
                                    </div>

                                    <div className="rounded-lg lg:block" hidden>
                                        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/60d1920fb369343119a7c17e_5ef62de4a589e2e0ab51f674_image-min.jpg" loading="lazy" className="h-full" alt="droomwork" />
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

export default RegisterForm