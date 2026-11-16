import React from 'react'

const Products = (props) => {

    const{img,feature,type,regular_price,offer_price,btn1}=props
  return (
    <>
    
      <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative m-3 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          NEW ARRIVAL
        </span>

        <button
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-black hover:text-white"
        >
          ♡
        </button>

        <img
          src={img}
          alt={feature}
          className="h-52 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 pt-2">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {type}
        </p>

        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          {feature}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Premium design. Powerful performance.
        </p>

        {/* Pricing */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            {offer_price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            {regular_price}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-600 active:scale-[0.98]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.5l2.1 12.1a2 2 0 0 0 2 1.65h9.9a2 2 0 0 0 1.95-1.55L21 7H5"
            />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
          {btn1}
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3 4.5 6v5.5c0 4.5 3.2 7.5 7.5 9.5 4.3-2 7.5-5 7.5-9.5V6L12 3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12 2 2 4-4"
            />
          </svg>
          Secure checkout · Easy returns
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Products