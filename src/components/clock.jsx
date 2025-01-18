import React from 'react'
import { useState, useEffect } from 'react'
import './Clock.css'



function Clock(){
    

    const actualizarHora = () => {
        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        //get am or or pm
        const ampm = hours >= 12 ? 'pm' : 'am'

        //convert to 12 hours format
        hours = hours % 12

        if(hours<10){
            hours = '0' + hours
        }

        if(minutes<10){
            minutes = '0' + minutes
        }

        if(seconds<10){
            seconds = '0' + seconds
        }

        return `${hours}:${minutes}:${seconds} ${ampm}`
    }

    const obtenerFecha = () => {
        const days=['Sunday', 'M0n', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
        const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', '0ct', 'N0v', 'Dic']

        const date = new Date()
        const day = days[date.getDay()]
        const month = months[date.getMonth()]
        const dayNumber = date.getDate()
        const year = date.getFullYear()

        return `${day}, ${month} ${dayNumber} 0f ${year }`

    }

    //para que renderice la hora al inicio
    const [time, setTime] = useState(actualizarHora())
    const [date, setDate] = useState(obtenerFecha())





    useEffect(() => {
        const interval = setInterval(() => {
            setTime(actualizarHora())
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className='digital-clock'>
            <h1 className='time'>{time}</h1>
            <h1 className='date'>{date}</h1>
        </div>
    )
}

export default Clock