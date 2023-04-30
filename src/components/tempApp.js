import React, { useEffect, useState } from 'react'
import "../css/style.css"
const TempApp = () => {
  const[city,setCity]=useState(null);
  const [search,setSearch]=useState("Mumbai")

  useEffect(()=>{
    const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4684ae5b2347433362bea186cf4b0978`
        const response=await fetch(url)
        const resJson= await response.json()
        console.log(resJson)
        setCity(resJson.main)
    }
    fetchApi()
  },[search])


  return (
    <>
      <div className='heading'><h1>Weather!</h1></div>
      <div className='box'>
        <div className='inputData'>
            <input type='search' className='inputField' value={search} onChange={(event)=>{
                setSearch(event.target.value)
                
            }}
            />
        </div>

            {
                !city?(<p className='errorMsg'>No Data found</p>):(
            
                        <>
                        <div className='info'>
                            <h1 className='loctaion'>
                                {search}
                            </h1>
                            <h1 className='temp'>
                                {city.temp}℃

                            </h1>
                            <h3 className='tempmin_max'>
                                    Min: {city.temp_min} | Max:{city.temp_max}
                            </h3>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                        </>
      )}
      </div>
      </>
  )
}

export default TempApp
