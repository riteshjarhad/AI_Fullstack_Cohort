import React from "react";

export default class App extends React.Component {


  // state

  // is a built in object in React JS
  // Used to holds the component state / data
  // i.e data storage functionality in React like JS Variable
  // Mutable- we can change or update our state whenever we want on any specific event

  // here Virtual DOM works- when we update something it will not reloads our page


  //constructor

  // used in a class
  // is a special type of function in a class
  // call automatically 

  //  we can pass methods in a constructor



  // A constructor is a special method that runs automatically when you create an objec
  // t from a class. Its main job is to give the object its initial values.


  // constructor()
  // {


  // // used to called parent constrtuctor methods and properties
  //   super()

  //   this.state=({
  //     key:value
  //   })
  // }



  constructor()
  {

    super()

    this.state=({
      id:1,
      name:"Ritesh",
      skill:"HTML",
      techSTack:["HTML","JS","NextJS"]
    })
  }


  // class

  Demo2=()=>{
    alert("hello function inside class using this")
  }


  Demo3=()=>{
    alert("hello React JS event using Arrow function")
  }



  UpdateSKills=()=>{
    // alert()


    this.setState({
      skill:"NextJS"
    })

  }

  render() {


    // normal JS code

      console.log(this.state)


      function Demo()
      {
        alert("hello React JS events☺️")
      }
      


    return (
      <>

        <h1>Name : {this.state.name} </h1>
        <h1>Skill : {this.state.skill}</h1>


        {/* events */}

        {/* without this keyword but function declarartion will be inside render method */}
        <button onClick={Demo}>Click Here</button>


        {/* with this */}

        <button onClick={this.Demo2}>Click Here 2</button>

        {/* modern way */}
        <button onClick={()=>this.Demo3()}>Click Here 3</button>


        <hr />

        <button onClick={()=>this.UpdateSKills()}>Update Skills</button>
      

      </>
    )
  }
}