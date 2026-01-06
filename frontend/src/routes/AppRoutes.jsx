import React from 'react'
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import UserRegister from '../pages/auth/UserRegister'
//import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import UserLogin from '../pages/auth/UserLogin'
import Home from '../pages/general/Home'
import CreateFood from '../pages/food_partner/CreateFood'
import Profile from '../pages/food_partner/Profile'
const AppRoutes = () => {
  UserLogin
  return (
      <BrowserRouter> 
        <Routes>
          <Route path='/user/register' element={<UserRegister/>}/>
           <Route path='/user/login' element={<UserLogin/>}/>

           <Route path='/food_partner/register' element={<FoodPartnerRegister/>}/>
           <Route path='/food_partner/login' element={<FoodPartnerLogin/>}/>
           <Route path='/' element={<Home/>} />
           <Route path='/food_partner' element={<CreateFood/>}/>
           <Route path='/food/partner/:profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes