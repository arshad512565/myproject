import React, { useEffect ,useRef} from 'react'
import { useState } from 'react'
const Front = () => {
  const a = useRef()
  console.log(" ok ok o ok")
  const [first, setfirst] = useState([
    {id:1,name:"Orange",price:200},
    {id:2,name:"banana",price:120},
    {id:3,name:"Mango",price:90},
    {id:4,name:"strawberry",price:400},
    {id:5,name:"Mong phali",price:1000},
    {id:6,name:"Biscuts box",price:2200},
    {id:7,name:"Fish",price:5000},
  ])

  const [pricee , setprice] = useState(10);
 const newdata =  first.filter((e)=>{
  return e.price<pricee;
})
const [time , settime]=useState(0);
useEffect(()=>{
  setTimeout(()=>{
    settime(time+1)
  },3000)
},[time])
 console.log('new data' ,newdata)
 console.log('time is : ',time)
 const getrange = (e)=>{
  const num = 100;
  setprice(e.target.value*num)
  console.log(pricee)
 }
 const [num , setnum]= useState(0);
 console.log('neli pari peli pari')
 useEffect(() => {
  //console.log("i am real useeffect")
  fetch("www.youtube.com").then(()=>{
    console.log("youtube open")
  }).catch(
    console.log("Not open youtube")
  )
  console.log("iski b**n ki b****i")
  return () => {
    console.log("useeffect return")
  }
},[setnum])

  return (
    <div className='m-6 sm:bg-blue-300 lg:bg-amber-600'>
      <h1>{time}</h1>
      <h1>{num}</h1>
      <h2>Front</h2>
      <button className='bg-amber-800 text-amber-50 p-9 'onClick={()=>{setnum(num+1)}}>Click</button>
      <p className='bg-yellow-300 w-full'>please Select your budget and get your products</p>
      <ul>
        {newdata.map((item,idx)=>{
          return (
            <li key={idx}>{item.name}: {item.price}</li>
          )
        })}
      </ul>
     

   
      <input type="range" name="getrange" id="" onChange={getrange} className='w-80'/>
       <div className='flex p-3 gap-2'>
      <h2>Your Budgut :</h2>
      <h2>{pricee}</h2>
         </div>
    </div>
  )
}
export default Front