import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DangerBtn, DarkBtn, IconBtn, WhiteBtn } from "../components/Button/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";
import './Home.css'
import { Detail } from "./Detail";

export const Home = () => {
  const [places, setPlaces] = useState();
  const [datas,setData] = useState([]);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [logindata, setLogindata]=useState("")
  
    const onChange = (event) => {
    setValue(event.target.value);
  };

  const toDetail=(name)=>{
    navigate(`detail/${name}`);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };
  const User=()=>{
    const getUser=localStorage.getItem('user_login');
    if(getUser && getUser.length){
      const user=JSON.parse(getUser)
      setLogindata(user)
    }
  } 

  const allPlaces=async()=>{
    return await axios.get("all")
    .then((response) =>setData(response.data))
    .catch((err) => {
      console.log("error",err);
    })
  }

  useEffect(() => {
    User();
    allPlaces();
  }, []);

  console.log("places", datas);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user_login')
    navigate("/signin");
  };


  const handleSearch=async(e) => {
    e.preventDefault();
    return await axios.get(`all?q=${query}`)
    .then((response)=>{
      setData(response.data);
      setQuery("")
    })
    .catch((err)=>console.log(err));
  };
  return (
    <div>
      {logindata.length===0?
      <>
      <h1>
        Error
      </h1>
      <button className="btn btn-primary" onClick={()=>navigate("/")}>Redirect Login Page</button>
      {navigate('signup')}
      </>

      :
      <>
      <div style={{display: 'flex', flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"50px"}}>
     
      <div className="search-container">
        {/* <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div> */}
         <div className="input-icons">
      <i class="fa-solid fa-magnifying-glass">
              </i>
                <input className="input-field-field" 
                       type="text" 
                       placeholder="Enter country to search.."
                       value={value} onChange={onChange}
                       />
            </div>
        <div className="dropdown">
          {datas
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const country = item.name.toLowerCase();

              return (
                searchTerm &&
                country.startsWith(searchTerm) &&
                country !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                // key={item.name}
              >
               <h5 onClick={(name) =>toDetail(name=item.name)}>{item.name}</h5>
              
                
              </div>
            ))}
        </div>
      </div>
        <DangerBtn onClick={logout} marginLeft="20px">Logout</DangerBtn>
      </div>
      {
            datas.length!=0?
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ width: "60%", margin: "auto" }}
      >
     
        <thead>
          <tr>
          
            <th>CountryName</th>
            <th>Capital</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
           
            {datas?.map(data=>(
          <tr>
            <td>{data.name}</td>
            <td>{data.capital}</td>
           
            {data.currencies?
            data.currencies?.filter((fil,index )=> index === 0).map(data=>(
              
                <td >{data.name}</td>
                
            )):<td> no currency found</td>
}

            
          </tr>
          ))}
          
            
          
       
        </tbody>
      </Table>
      : <h1 style={{color:"grey"}}>Loading...</h1>}
      </>
      }
    </div>
  );
};


// import { useState } from "react";
// import "./styles.css";
// var data = require("./MOCK_DATA.json");

// export default function App() {
//   const [value, setValue] = useState("");

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };

  // return (
  //   <div className="App">
  //     <h1>Search</h1>

  //     <div className="search-container">
  //       <div className="search-inner">
  //         <input type="text" value={value} onChange={onChange} />
  //         <button onClick={() => onSearch(value)}> Search </button>
  //       </div>
  //       <div className="dropdown">
  //         {data
  //           .filter((item) => {
  //             const searchTerm = value.toLowerCase();
  //             const fullName = item.full_name.toLowerCase();

  //             return (
  //               searchTerm &&
  //               fullName.startsWith(searchTerm) &&
  //               fullName !== searchTerm
  //             );
  //           })
  //           .slice(0, 10)
  //           .map((item) => (
  //             <div
  //               onClick={() => onSearch(item.full_name)}
  //               className="dropdown-row"
  //               key={item.full_name}
  //             >
  //               {item.full_name}
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   </div>
  // );
// }