import logo from './logo.svg';
import './App.css';

import { Signup } from './modules/Signup';
import { Signin } from './modules/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './modules/Home';
import axios from 'axios';
import { Detail } from './modules/Detail';
import { Error } from './modules/Error';

function App() {
  axios.defaults.baseURL='https://restcountries.com/v2/'
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/signup" element={ <Signup/>}/>
        <Route  path="signin" element={ <Signin/>}/>
        <Route  path="/" element={ <Home/>}/>
        <Route  path="detail/:name" element={ <Detail/>}/>
        <Route  path="*" element={ <Error/>}/>




     
      </Routes>
     
    </div>
  );
}

export default App;
