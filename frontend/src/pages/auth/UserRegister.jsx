import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserRegister = () => {
  const navigate = useNavigate();
 async function submit (e){
    e.preventDefault();
    const firstName = e.target.firstName.value;
     const lastName = e.target.lastName.value;
      const email = e.target.email.value;
       const password = e.target.password.value;
     const response = await axios.post('http://localhost:4500/api/auth/user/register',{
        fullName:firstName+" "+lastName,
        email,password
      },{withCredentials:true})
      navigate("/");
      console.log(response)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome </h1>
          <p className="text-gray-500 mt-2">Create new account</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={submit}>
          
          {/* Email */}
           <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input name='firstName'
              type="text"
              placeholder="hohn"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
            name='lastName'
              type="text"
              placeholder="watson"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name='password'
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" />
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-indigo-700 transition-all
                       duration-300 shadow-lg"
          >
            Sign up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          already have a account
          <a href="#" className="text-indigo-600 font-semibold hover:underline ml-1">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default UserRegister