import React from "react";
import AvailableProducts from "./AvailableProducts";
import { Myprovider } from "./Context/ProductContext";
import MenCategory from "./MenCategory";


const AllProducts =()=>{
    const {allproduct , isloading,} = Myprovider()

    return (
        <>
        <AvailableProducts />
        {isloading  ? (
            <div className="flex justify-centeer z-0 p-5">
                <h1 className="text-3xl text-red 500">Loading Data.....</h1>
            </div>
        ) : (
            <div className="w-screen border-4 p-5 flex gap-5 flex-wrap justify-center">
                {allproduct.map((curr , id)=>(
                    <MenCategory key={id} {...curr} />
                ))}
                </div>
            
        )}
        </>
    )
}

export default AllProducts