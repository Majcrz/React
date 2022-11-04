import React from 'react'
var moment=require('moment')
export default function Cards({data}) {
let newdate=new Date()
console.log("newdate",newdate)
const date=`${newdate.getDate()}-${newdate.getMonth()}-${newdate.getYear()}`
console.log("date",date)
const weekday=data.dt*1000
console.log("week",weekday)
newdate.setTime(weekday)
  return (

    <div className='box-1 col-sm-2'>
    <br></br>
    <div className='box-5-1'>{moment(newdate).format('dddd')}</div><br></br>
    <div className='box-5-2'>{moment(newdate).format('MMMM,Do,h:mm:a')}</div><br></br>
    <div className='box-5-1'>{data.main.temp}</div><br></br><br></br>
    <div className='box-5-2'>{data.dt_txt}</div><br></br>
    <div className='box-5-2'>{data.weather[0].description}</div><br></br>
    </div>
  )

}
