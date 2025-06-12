"use client"
import "../styles/form.scss"
import { Inter } from 'next/font/google'
// import { useState } from "react";
const inter = Inter({ subsets: ['latin'] })


function FormPage() {
  // const  [email,se]
  // const [formData, setFormData]= useState({
  //   email: "",
  //   password: "",
  // })
  // function submitHandler(e){
  //   e.preventDefault();
  //   console.log("form submitted");
  // }
  return (
    <div className="container">
      <h1 >Sign In With</h1>
      <form>
        <div className="form-content">
          <div>
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <label >Password</label>
            <input type="password" placeholder="Password"/>
          </div>
          <button className="button">Sign In</button>
        </div>
      </form>
    </div>
  );
}
export default FormPage;
