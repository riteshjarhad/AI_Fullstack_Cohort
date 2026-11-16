import React from 'react'
import Products from './Products'
import Product2 from './Product2'
import Product3 from './Product3'

import { data } from './data'

const App = () => {
  return (
    <>

      <section className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-lg bg-orange-50 font-medium uppercase tracking-widest text-blue-600">
              Our Collection
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {/* <Products

              img="/assets/2.png"
              type="Home & Living"
              feature="Minimal Desk Lamp"
              regular_price="₹1,499"
              offer_price="₹1,999"
              btn1="Add to Cart"

            /> */}


            {/* product 2 */}
            {/* <Product2 


              img="/assets/1.png"
              type="Electroncics"
              feature="Apple Iphone 18"
              regular_price="₹111,499"
              offer_price="₹111,999"
              btn1="Add to Cart"
            /> */}

            {/* product 3 */}
            {/* <Product3

              img="/assets/3.png"
              type="Food"
              feature="Home APplicences"
              regular_price=" 499"
              offer_price="₹ 999"
              btn1="Add to Cart"
            
            
            /> */}



            {/* step 4 -  now we are going to reuse same component for multiple products */}

            {/* <Products

              img="/assets/2.png"
              type="Home & Living"
              feature="Minimal Desk Lamp"
              regular_price="₹1,499"
              offer_price="₹1,999"
              btn1="Add to Cart"

            />

            <Products

              img="/assets/1.png"
              type="Electronics"
              feature="Minimal Desk Lamp"
              regular_price="₹1,499"
              offer_price="₹1,999"
              btn1="Add to Cart"

            />

              <Products

              img="/assets/3.png"
              type="Electronics"
              feature="Minimal Desk Lamp"
              regular_price="₹1,499"
              offer_price="₹1,999"
              btn1="Add to Cart"

            />


            <Products

              img="/assets/3.png"
              type="Electronics"
              feature="Minimal Desk Lamp"
              regular_price="₹1,499"
              offer_price="₹1,999"
              btn1="Add to Cart"

            /> */}


            {/* Step 5 now our data is stored in seprate api or file  */}
            {/* Modern way */}

            {/* <Products

              img={data[0].img}
              type={data[0].type}
              feature={data[0].feature}
              regular_price={data[0].regular_price}
              offer_price={data[0].offer_price}
              btn1={data[0].btn1}

            /> */}



            {/* **************************************** */}


            {
              data.map((val, index, array) => {

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


          </div>
        </div>
      </section>




    </>
  )
}

export default App