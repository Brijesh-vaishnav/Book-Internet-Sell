// import React from 'react'
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Home = () => {
    

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
      <Link to="/login">
        <button className="btn pink-btn" >Logout</button>
      </Link>
    </div>
  )
}

export default Home
