import React from 'react'

import { useState, useEffect } from 'react';


// contructor()
// {
//   super()
//   this.state=({

//   })
// }

// this.setState({

// })







const App = () => {


  const updateState = () => {

    // alert()

    // setCount(5)
    setCount(count + 1)


  }


  // set State
  // const[initialState,setState]=useState(initialState_DATA- [ ] /.  {} ,)
  const [count, setCount] = useState(1)

  const [name, setName] = useState("Rowan")

  // const[data,setData]=useState([{id:1,name:"Pratik",skill:"React"}])



  // useEffect
  // called after rendering

  // useEffect(() => {

  //   alert("hello useEffect called")
  //   console.log("useEffect called...")

  // },[])
  // []- to avoid multiple callback for each and every rendering



  // apply side effect on specific state

  useEffect(()=>{
    alert("hello state updated ....🎊")
  },[name])
  
  return (
    <>

      <h1>useState and useEffect Hooks</h1>
      <hr />


      {/* useState */}

      {/* similar to state object inside class component */}

      {/* used to manage state of our functional component i.e holds the data or manage the data */}
      {/* mutable- we can update our state whnever we want */}


      {/* syntax */}

      {/* const[initialState,setState]=useState() */}


      <h1>Initial Count :  {count}</h1>


      <button onClick={() => updateState()}>Update State</button>

      <hr />

      <h1>Initial Name : {name}</h1>
      <button onClick={() => setName("Ritesh")}>Update State Name</button>






      {/* useEffect */}

      {/* used to perform side effect on our component */}
      {/* called after rendering component data */}

      {/* eg. API calling , triggers, events,  */}


      {/* syntax */}
      {/* 
useEffect(()=>{

},[dependency]) */}




    </>
  )
}

export default App
