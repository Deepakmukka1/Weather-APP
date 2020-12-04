import React, { useState,useEffect } from 'react'

const Weather=()=> {
    
    const api={
        url:'https://api.weatherapi.com/v1/current.json?key=793681b56dbd46de825123236202911'
    }
    const [loc,setLoc]=useState('');
    const [weather,setWeather]=useState({
       
    })
    const changes=()=>{

       
       
        fetch(`${api.url}&q=${loc}`)
        .then(res=>res.json())
        .then( result=>
            {
            
                setWeather(result)
                setLoc('')
                console.log(result)
                console.log(result.main)
                
        })
        
   
        
        
    }
  
        
   

    return (
        <div>
         <input type="text" onChange={ e=> setLoc(e.target.value)} value={loc} placeholder="Enter your city name"/>
         <button className="btn" onClick={changes} >Search</button>
       <div className="cards">
       { (typeof weather.location!="undefined") && (loc!==' ') ?
       <div> 
           <img src={weather.current.condition.icon}/>
    <h3>{weather.current.condition.text}</h3>
        <div className="temps">{weather.current.temp_c}°C</div>
        
        <h3>{weather.location.name}</h3>
       
       
       </div>: 
       (weather.error)?<div><div className="temps" style={{marginTop:'4.3rem'}}>404</div><div>No matching location found</div></div>:
       <div></div>
         } 
      </div>
        </div>
    )
}
export default Weather;
