import React from "react";

import { electronics, food, clothing } from './data'
import Products from "./Products";

class App extends React.Component {

  constructor()
  {
    super()
    this.state=({
      show_all_products:true,
      show_electronics:true,
      show_food:true,
      show_clothing:true
    })
  }

electronics_toggler=()=>{
  // alert()

  this.setState({
    show_electronics:true,
    show_clothing:false,
    show_food:false
  })
}



food_toggler=()=>{
  this.setState({
    show_electronics:false,
    show_clothing:false,
    show_food:true,
  })
}


clothing_toggler=()=>{
  this.setState({
    show_electronics:false,
    show_clothing:true,
    show_food:false
  })
}


All_Toggler=()=>{
  this.setState({
    show_clothing:true,
    show_electronics:true,
    show_food:true
  })
}
  render() {
    return (
      <>


        <section className="min-h-screen bg-slate-50 px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-lg bg-orange-50 font-medium uppercase tracking-widest text-blue-600">
                Our Collection
              </p>

              <div className="mt-18 flex flex-wrap items-center gap-3">
                <button onClick={this.All_Toggler} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg">
                  All Products
                </button>

                <button className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"  onClick={this.electronics_toggler} >
                  Electronics Products
                </button>

                <button onClick={this.food_toggler} className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
                  Food Products
                </button>

                <button onClick={this.clothing_toggler} className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
                  Clothing Products
                </button>
              </div>





            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">


              {
                this.state.show_electronics ?

                electronics.map((val, index, array) => {
                  return (
                    <>


                      <Products

                        img={val.img}
                        type={val.type}
                        feature={val.feature}
                        regular_price={val.regular_price}
                        offer_price={val.offer_price}
                        btn1={val.btn1}


                      />


                    </>
                  )
                }) : null
              }



              {/* food data */}

              {

                this.state.show_food &&

                food.map((val, index, array) => {
                  return (
                    <>

                      <Products

                        img={val.img}
                        type={val.type}
                        feature={val.feature}
                        regular_price={val.regular_price}
                        offer_price={val.offer_price}
                        btn1={val.btn1}


                      />

                    </>
                  )
                })
              }



              {/* clothing data */}


              {

                this.state.show_clothing ? 
                clothing.map((val,index)=>{
                  return(
                    <>
                       <Products

                        img={val.img}
                        type={val.type}
                        feature={val.feature}
                        regular_price={val.regular_price}
                        offer_price={val.offer_price}
                        btn1={val.btn1}


                      />
                    </>
                  )
                }) :  null
              }


            </div>
          </div>
        </section>



      </>
    )
  }
}


export default App