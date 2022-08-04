import logo from './logo.svg';
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css';
const App = () =>{
  let [data,setData] = useState([])
  useEffect(()=>{
      axios
         .get('http://localhost:3005/data')
         .then(result => setData(result.data))
  },[])
  return (
    <React.Fragment> 
      {
        data.map(item =>(
          <ul>{item.title}</ul>
        ))
      }
    </React.Fragment>
  )
}

export default App;
