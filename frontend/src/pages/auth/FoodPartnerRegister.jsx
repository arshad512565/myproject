import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const FoodPartnerRegister = () => {
  const navigate = useNavigate();
  const handleReg = async(e)=>{
    e.preventDefault();
    const name = e.target.fullName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const address = e.target.address.value;
      const businessName = e.target.businessName.value;
          const phone = e.target.phoneNumber.value;
   
   const response = await axios.post('http://localhost:4500/api/auth/food-partner/register',{
    name,contactName:phone,email,password,address,phone,businessName
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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Become a Partner
          </h1>
          <p className="text-gray-500 mt-2">
            Register your business with us
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleReg}>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Owner Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="fullName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Foodies Restaurant"
              name="businessName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Business Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="business@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+92 3XX XXXXXXX"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
             <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="street or city or divion"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm mt-2">
            <input type="checkbox" className="mt-1 accent-orange-600" />
            <p className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-orange-600 font-semibold hover:underline">
                Terms & Conditions
              </a>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-orange-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-orange-700 transition-all
                       duration-300 shadow-lg"
          >
            Register as Partner
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already a partner?
          <Link className="text-orange-600 font-semibold hover:underline ml-1"
           to={"/food_partner/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
