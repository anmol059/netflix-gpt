import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="relative">
                <form className=" bg-black bg-opacity-70 w-[27rem] mt-32 absolute m-auto right-0 left-0 text-white">
                    <div className="m-12">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-3xl mx-6 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                            {!isSignInForm &&
                                <input type="text" placeholder="Full Name" className="p-2 m-6 h-12 bg-gray-600 rounded-sm" />
                            }
                            <input type="text" placeholder="Email Address" className="p-2 m-6 h-12 bg-gray-600 rounded-sm" />
                            <input type="password" placeholder="Password" className="p-2 m-6 h-12 bg-gray-600 rounded-sm" />
                            <button className="p-3 m-6 bg-red-700 rounded-sm">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                            <div className="cursor-pointer">
                                {!isSignInForm && <span className="m-6 p-2">New to Netflix? <strong onClick={toggleSignInForm}>Sign up now.</strong></span>}
                                {isSignInForm && <span className="m-6 p-2">Already Registered? <strong onClick={toggleSignInForm}>Sign In now.</strong></span>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt="Background_Image"
                />
            </div>
        </div>
    )
}

export default Login