import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    // inside component
    const nav = useNavigate()



    const GoHome=()=>{
        // alert()
        nav('/')
    }

    return (
        <>



            <h1>Contact US</h1>


            <button onClick={()=>GoHome()}>Go Home</button>
            <button onClick={()=>nav('/about')}>About US</button>


            <button onClick={()=>nav(-2)}>Go Back 2 Tabs</button>







        </>
    )
}

export default Contact