import React, { useState } from 'react'

const Front2 = () => {
    const [product , setproduct]= useState([
        {id:1,name:"oppo a16",company:"oppo"},
        {id:2,name:"oppo a37",company:"oppo"},
        {id:3,name:"oppo a5s",company:"oppo"},
        {id:4,name:"realme 5i",company:"realme"},
        {id:5,name:"realme a37",company:"realme"},
        {id:6,name:"samsung a7s",company:"samsung"},
    ]);
    const findproducts = product.filter((item)=>{
       return item.name.includes("oppo")
    })
    console.log(findproducts)
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default Front2