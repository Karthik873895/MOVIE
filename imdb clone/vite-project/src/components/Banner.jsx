import React from "react";

function Banner() {
  return (
    <div>
      <div
        className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url(https://assets-in.bmscdn.com/discovery-catalog/events/et00386559-xlpemhqvuh-landscape.jpg)",
        }}
      ></div>
      <div className="text-white text-xl text-center w-full bg-blue-900/60 p-4">Blink(Telugu)</div>
    </div>
  );
}

export default Banner;
