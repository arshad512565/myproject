// import React, { useEffect, useState } from 'react'

// const Home = () => {
//   const [videos, setVideos] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:4500/api/food/get",{withCredentials:true})
//     .then((response) => {
//       console.log("API Response =", response.data);

//       // Check what backend is sending
//       if (response.data.fooditems) {
//         setVideos(response.data.fooditems); 
//       }
//     })
//     .catch((err) => console.log("API Error:", err));
// }, []); //  <-- very important
// console.log(videos)
  
//   return (
//     <div className='flex justify-center bg-amber-200'>
//       <div>
//          <img  className="w-full h-max" src="https://ik.imagekit.io/zb8jxctk3/9c62f250-6766-47c9-a8b0-e41dc0ceb0da_xOUUSIiwd" alt="" />
//       {/* <video autoPlay loop controls src="https://ik.imagekit.io/zb8jxctk3/6627de9a-73a9-4875-a02f-64225ba299ed_8_MZIGikj">
//       Your browser does not support the video tag.</video> */}

//       {/* <video autoPlay loop controls src="https://ik.imagekit.io/zb8jxctk3/4542bb19-beb2-4527-9785-9a6296a3f446_cu-_D9oDl">
//       Your browser does not support the video tag.</video> */}
//       </div>
     
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useRef, useState } from "react";
 import axios from 'axios'
 import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
 import "./home.css"
const styles = {
  container: {
    height: "100vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  },
  main:{
    width:"100%",
    height:"100vh"
  },
  video: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    scrollSnapAlign: "start",
  },
};

// const videos = [
  
// ];

const Home = () => {

  console.log('point 1')
  const navigate = useNavigate();
  const videoRefs = useRef([]);
const [videos, setvideos] = useState([])
 console.log('point 2')
useEffect(() => {
  axios.get("https://myproject-zhmv.onrender.com/api/food/get",{withCredentials:true})
    .then((response) => {
      // navigate("/user/login")
     console.log("API Response =", response.data);
      if (response.data.fooditems) {
        setvideos(response.data.fooditems); 
      }
    }).catch((error) => {
  console.log("API Error =", error);

  if (error.response?.status === 401) {
    navigate("/user/register");
  }
});

}, [])
 console.log('point 5 last')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);
  const videoaction = ()=>{
    
  }
  return (
    <div> 
    <div style={styles.container} className="fixed inset-0 bg-black snap-y snap-mandatory overflow-hidden touch-pan-y">
      {videos.map((src, index) =>  (
        <>
        <video onClick={videoaction} 
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          src={src.video}
          style={styles.video}
          className="h-[100dvh] snap-start flex items-center justify-center bg-black"
          loop
          muted
          playsInline
        />
        <div className="overlay">
          <p>{src.description}</p>
          <Link className="storebtn" to={"/food/partner/"+src.foodPartner}>Visit store </Link>
          </div>
           </>
      ))}
    </div>
    </div>
  );
};

export default Home;

