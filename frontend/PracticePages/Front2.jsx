// import React, { useState } from 'react';

// const Front2 = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submit behavior
//     // Handle login logic here (e.g., send data to a server)
//     alert(`Logging in with:\nUsername: ${username}\nPassword: ${password}`);
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign In</button>
//       </form>

//       {/* Embedded CSS for styling */}
//       <style jsx global>{`
//         .login-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background-color: #f0f2f5;
//           margin: 0;
//           padding: 0;
//         }

//         .login-form {
//           background-color: #fff;
//           padding: 2rem;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           width: 100%;
//           max-width: 400px;
//           text-align: center;
//         }

//         .login-form h2 {
//           margin-bottom: 1.5rem;
//           color: #333;
//         }

//         .input-group {
//           margin-bottom: 1rem;
//           text-align: left;
//         }

//         .input-group label {
//           display: block;
//           margin-bottom: 0.5rem;
//           color: #555;
//         }

//         .input-group input {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           box-sizing: border-box; /* Ensures padding doesn't affect width */
//           font-size: 1rem;
//         }

//         .input-group input:focus {
//           outline: none;
//           border-color: #007bff;
//         }

//         .login-form button {
//           width: 100%;
//           padding: 0.75rem;
//           border: none;
//           border-radius: 4px;
//           background-color: #007bff;
//           color: white;
//           font-size: 1rem;
//           font-weight: bold;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }

//         .login-form button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Front2;
import React from 'react'
import './Alls.css';
const Front2 = () => {
  return (
    <div className='container'>
      <div className='input-container'>
        <h1>Login</h1>
        <div className='input-group'> 
           <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" className=''/>
        </div>
       <div className='input-group'>
          <label htmlFor="username">Password</label>
        <input type="text" name="" id="" className=''/>
       </div>
        <button className='btn'>Sign in</button>
      </div>
    </div>
  )
}

export default Front2
