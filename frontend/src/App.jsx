import React from 'react'
import AppRoutes from './routes/AppRoutes';
import Front from '../PracticePages/Front';
import Front2 from '../PracticePages/Front2';
import Jscript from '../PracticePages/Jscript.js';
import axios from "axios";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div>
      <AppRoutes/>
      {/* <Front/> */}
      {/* <Front2/> */}
      {/* <Jscript/> */}
      
    </div>
  )
}

export default App