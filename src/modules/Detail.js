import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DarkBtn } from "../components/Button/Button";


export const Detail = (props) => {
  const [datas,setData] = useState([]);
  const { name } = useParams();
  const allPlaces=async()=>{
    return await axios.get("all")
    .then((response) =>setData(response.data))
    .catch((err) => {
      console.log("error",err);
    })
  }
  useEffect(() => {
    allPlaces();
  }, []);
  console.log("filtered name cap",datas?.filter(fil=>fil.name===name));
  console.log("name props",name);
  return (
    <div >

      {
        
      datas?.filter(fil=>fil.name===name).length!=0 ?
      datas?.filter(fil=>fil.name===name).map(data=>
        data.capital?
      <h1 style={{margin:"20%",color:"grey"}}>The capital of {name} is {data.capital}</h1>
      : 
      <h1 style={{margin:"20%",color:"grey"}}>Sorry, no data found!!</h1>
      )
      : 
      <h1 style={{margin:"20%",color:"grey"}}>Loading..</h1>
      
      }
      <Link to="/" style={{textDecoration:"none"}}>
      <DarkBtn marginLeft="40%">Back Home</DarkBtn>
      </Link>
    </div>
  )
}
