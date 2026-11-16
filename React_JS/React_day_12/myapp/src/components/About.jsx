import React from 'react'
import { useLocation } from 'react-router-dom'


// useParams- used to access current url data in a object format
// it return object params data

import { useParams } from 'react-router-dom';


const About = () => {


    // 1
    const data=useParams()
    console.log(data)



    // 1
    const loc=useLocation()

    console.log(loc)


    if(loc.pathname==='/about')
    {
        loc.replace.pathname='/'
    }
    return (
        <>



            {/* useLocation hooks */}
            {/* return location object from JS */}
            {/* return current path and current url information */}
            <h1>About Us</h1>

            <h2>Hi {data.id} {data.name}</h2>

           

        </>
    )
}

export default About



// URL Decoding 

// https:- NP

//www.google.com- domain
// /search- pathname
// 
// ?q=apple+iphone+18- query

// // 
// &oq=apple+
// &gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgcIABAAGI8CMg0IARAuGLEDGIAEGOUEMggIAhBFGCcYOzINCAMQABiDARixAxiABDIKCAQQABixAxiABDIQCAUQABiDARixAxiABBiKBTIKCAYQABixAxiABDIGCAcQRRg90gEINDA5OWowajeoAgCwAgA
// sourceid=chrome
// &source=chrome.ob
// &ie=UTF-8


// https:/
// /letshyphen.com
// /collections/all
// ?utm_source=google
// &utm_medium=cpc&
// utm_campaign=VM_Search_Brand_27July
// %2723
// &utm_term=Main_Brand
// &gad_source=1
// &gad_campaignid=20396787786
// &gbraid=0AAAAAp_dPLnTvmVaKMcpL-8VC_t0oJXz4
// &gclid=CjwKCAjwuobXBhBXEiwAYUaIlf2Bnx-zfgbNzwgdmpfva7FDbPIWk7wTSxJIWMDCAFCsa2Yl0BiYQxoCScMQAvD_BwE


// http://letshyphen.com/products/double-shot-radiance-lift-serum