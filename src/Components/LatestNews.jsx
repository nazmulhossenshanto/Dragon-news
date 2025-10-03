import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center gap-5 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2 ">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
