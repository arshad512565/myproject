import React from "react";
import { Link } from "react-router-dom";
import FoodPartnerRegister from "./FoodPartnerRegister";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  const handleLogin = async(e)=>{
    e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
   const response = await axios.post('http://localhost:4500/api/auth/food-partner/login',{
    email,password
   },{withCredentials:true}).then(response =>{
    console.log(response.data)
       alert(response.data.message)
   navigate("/food_partner")
   }).catch(error =>{
    console.error(error)
   })

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400">
      
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Partner Login
          </h1>
          <p className="text-gray-500 mt-2">
            Access your partner dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Business Email
            </label>
            <input
              type="email"
              placeholder="partner@email.com"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-600" />
              Remember me
            </label>
            <a href="#" className="text-orange-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-orange-700 transition-all
                       duration-300 shadow-lg"
          >
            Login as Partner
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          New Partner?
          <Link className="text-orange-600 font-semibold hover:underline ml-1" to={"/food_partner/register"}>
           Register your business
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
