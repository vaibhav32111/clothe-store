import React from "react";
import AvailableProductWomen from "./AvailableProductWomen";
import { Myprovider } from "./Context/ProductContext";


const Women = () => {
  const { womenproduct, isloading } = Myprovider();
  //console.log(womenproduct);
  return (
    <>
    <AvailableProductWomen/>
      {isloading ? (
        <div className="flex justify-center z-0">
          <h1 className="text-3xl text-red-500">Loading Data...</h1>
        </div>
      ) : (
        <div className="w-screen border-4 p-5 flex gap-5 flex-wrap justify-center">
          {womenproduct.map((curr, i) => (
            <MenCategory key={i} {...curr} />
          ))}
        </div>
      )}
    </>
  );
};

export default Women;
