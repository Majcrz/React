import React,{useState,useEffect} from 'react'
import './Degree.css'
import Weather from './Weather'
import Cards from './Cards'

export default function Degree() {
const [DailyData,SetDailyData] =useState([])


useEffect(()=>{
const weatherurl='http://api.openweathermap.org/data/2.5/forecast?zip=673001,IN&units=imperial&APPID=4f35aa6018a7c52c068ab9fb74cf1576'
fetch(weatherurl).then((res)=>res.json())
.then((data)=>{
  console.log(data.list)
  const Details=data.list.filter((reading)=>
    reading.dt_txt.includes("12:00:00")

  )
  SetDailyData(Details)
})
},[])
console.log("product==>",DailyData)

  return (
<>
<Weather/>
<div className='row'>
{DailyData.map((data,key)=>
 <Cards data={data}/>
)}
</div>


    </>
  )
}
