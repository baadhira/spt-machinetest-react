import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconBtn, PrimaryBtn } from "../components/Button/Button";
import { Text } from "../components/Input/Input";
import { H3, H5 } from "../components/Text/Text";
import { Flex } from "../components/UI/Flex/Flex";

import "./Login.scss";

export const Signin = () => {
  const navigate = useNavigate();
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

      const getUserArr=localStorage.getItem('userdata');

      console.log(getUserArr);

      const { email, password}=inpval;
      
      if(email === ""){
        alert("email field is required")
      }else if(!email.includes("@")){
        alert("Please enter valid email")
      }else if(password === ""){
        alert("Please enter valid password")
      }else if(password.length < 5){
      alert("Password must be at least 5 characters")
    }else{
      if(getUserArr && getUserArr.length){
        const userdata=JSON.parse(getUserArr)
        const userlogin=userdata.filter((el,k)=>{
          return el.email === email && el.password===password
        })
        if(userlogin.length===0){
          alert("invalid details")
        }else{
          console.log("user login successfully");
          localStorage.setItem("user_login",JSON.stringify(getUserArr))
          navigate('/')
        }
      }
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
        <H3 margin="20px">Login Your Account </H3>
        <Flex>
          <H5 color="black">New user?</H5>

          <H5
            fontWeight="bold"
            cursor="pointer"
            margin="0 7px"
            color="dodgerblue"
            onClick={() => navigate("/signup")}
          >
            Signup
          </H5>
        </Flex>

        <Text
           placeholder="Enter your Email" type="email"
           onChange={getdata}
           name="email"
        
        />

        <Text
         placeholder="Enter your password"
         onChange={getdata}
         type="password"
         name="password"
        />

        <IconBtn margin="10px 0px" width="90%" onClick={addData}>
          Login
        </IconBtn>
      </div>
    </div>
  );
};
