import React from 'react'

const Product2 = (props) => {
    return (
        <>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-52 items-center justify-center bg-amber-50">
                    <img
                        src={props.img}
                        className="h-50 w-80 object-contain"
                        alt="Product"
                    />
                </div>

                <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        {props.type}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-slate-900">
                        {props.feature}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        A simple touch for a better workspace.
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-900">
                            {props.offer_price}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                            {props.special_price}
                        </span>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
                        {props.btn1}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product2