import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Profile = () => {
  const [User, setUser] = useState([]);
  const [videos, setvideos] = useState([])
  const { profile } = useParams();

  useEffect(() => {
    axios
      .get(`https://myproject-zhmv.onrender.com/api/partner/${profile}`, {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
        setUser(data.data.partner);
        setvideos(data.data.fooditem)
        console.log("your videos",videos)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(User);
   console.log("your videos",videos)
   const videoaction = (video)=>{
    console.log(video)
   }
  return (
    <div className="container bg-gray-900 h-svh text-amber-50">
      <div className="main">
        <div className="">
          <div className="flex p-2  justify-around content-center h-30">
            <img
              className="w-30 h-30 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="No image found"
            />
            <div>
              <div className="bg-blue-700 text-amber-50 m-4 p-2 rounded-2xl text-center">
                {User.name}
              </div>
              <div className="bg-blue-700 text-amber-50 m-4 p-2 rounded-2xl text-center">
                {User.address}
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-evenly mt-8 ">
            <div>
              <h3>Total meals </h3>
              <p> 79</p>
            </div>
            <div>
              <h3>Customer serve </h3>
              <p> 234</p>
            </div>
          </div>
          <hr className="mt-5" />
        </div>

        <div className="w-full">
          <div className="flex flex-wrap w-full">
            {videos.map((video,idx)=>{
              return (
                 <video onClick={()=>{videoaction(video)}}
              className="w-50"
              src={video.video}
              autoPlay
              muted
            >
            </video>
              )
            })}
           
           
            {/* <button className='bg-green-950 text-amber-50 p-5 rounded-2xl border-0' onClick={getuserdata}>Click me !</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
