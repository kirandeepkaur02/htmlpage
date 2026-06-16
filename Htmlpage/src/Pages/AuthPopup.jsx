import React from 'react'
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const AuthPopup = ({ closePopup, isLogin, setIsLogin }) => {
  return (
   <div className="fixed inset-0 z-9999 bg-black/50 flex items-center justify-center p-4">
    <div className="bg-white w-[90%] max-w-md rounded-3xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-2xl"
        >
          ✕
        </button>

         <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

         {/* Form */}
        <div className="flex flex-col gap-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-xl outline-amber-600"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-xl outline-amber-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-xl outline-amber-600"
          />

          <button className="bg-amber-600 text-white p-3 rounded-xl font-semibold">
            {isLogin ? "Login" : "Register"}
          </button>

        </div>


        {/* Divider */}
        <div className="text-center my-5 text-gray-500">
          OR
        </div>


        {/* Social Login */}
        <button className="w-full border p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100">
          <GoogleIcon />
          Continue with Google
        </button>


        <div className="flex justify-center gap-5 mt-5 text-3xl text-gray-700">
          <FacebookIcon className="cursor-pointer hover:text-blue-600" />
          <InstagramIcon className="cursor-pointer hover:text-pink-500" />
        </div>


        {/* Switch Login/Register */}
        <p className="text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-amber-600 cursor-pointer font-semibold ml-2"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

    </div>
    </div>
  )
}
export default AuthPopup