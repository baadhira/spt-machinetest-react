import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconBtn, PrimaryBtn } from "../components/Button/Button";
import { Text } from "../components/Input/Input";
import { H3, H5 } from "../components/Text/Text";
import { Flex } from "../components/UI/Flex/Flex";

import "./Login.scss";



export const Signup = () => {
  const navigate=useNavigate()
  

  const [inpval,setInpval]=useState(   
    {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
    })

    const [data,setData]=useState([])

    const addData=(e) => {
      e.preventDefault();
      const {firstName, lastName, email, password, confirmPassword}=inpval;
      if(firstName === ""){
        alert("Please enter first name")
      }else if(lastName === ""){
        alert("Please enter last name")

      }else if(email === ""){
        alert("email field is required")
      }else if(!email.includes("@")){
        alert("Please enter valid email")
      }else if(password === ""){
        alert("Please enter valid password")
      }else if(confirmPassword === ""){
      alert("Please enter confirm password")
    }else if(password !=confirmPassword){
      alert("Passwords doesnot match")
    }else if(password.length < 5){
      alert("Password must be at least 5 characters")
    }else{
      console.log("data added successfully");

      localStorage.setItem("userdata",JSON.stringify([...data,inpval]))
      navigate('/signin')
    }

    }
    console.log(inpval);

    const getdata=(e)=>{
    // console.log(e.target.value);
    const {value,name}=e.target;
    setInpval(()=>{
      return{
        ...inpval,
        [name]: value
      }
    })
   

    // console.log(value,name);
  }

  
  return (
    <div className="login">
      <div className="login_container">
        <H3 margin="20px">Create an Account </H3>
        <Flex>
          <H5 color="black">Already have an account?</H5>

          <H5
            fontWeight="bold"
            cursor="pointer"
            margin="0 7px"
            color="dodgerblue"
            onClick={()=>navigate('/signin')}
          >
            Login
          </H5>
        </Flex>
        
        <Flex width="90%">
          <Text
           placeholder="Enter your First Name" 
           type="text"
           onChange={getdata}
       
          name="firstName"
          />
          <Text
            placeholder="Enter your Last Name"
            marginLeft="30px"
            type="text"
            name="lastName"
            onChange={getdata}
          />
        </Flex>

        <Text placeholder="Enter your Email" type="email"
                 onChange={getdata}
                 name="email"
           />

        <Text placeholder="Enter your password"
        type="password"
                 onChange={getdata}
                 name="password"
         />

        <Text placeholder="Confirm your password"
               onChange={getdata}
               type="password"
               name="confirmPassword"
         />

        <IconBtn margin="10px 0" width="90%" onClick={addData} >
          Signup
        </IconBtn>
        {/* <Flex alignItems="center" margin="10px">
          <input type="checkbox" name="check" style={{ margin: "10px" }} />
          <H5 color="grey">I have read and agree to the </H5>

          <H5 cursor="pointer" margin="10px" color="dodgerblue">
            Terms of Service
          </H5>
        </Flex> */}
      </div>
    </div>
  );
};
