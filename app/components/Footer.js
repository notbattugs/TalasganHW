import React from 'react';

export default function Footer() {
  return (
    <div className="w-screen h-[300px] bg-white flex justify-around items-center flex-col text-black gap-4">
      <h1 className=" text-xl font-bold">Talasgan</h1>
      <div className="w-[80%] h-[1px] bg-zinc-500"></div>
      <div className="w-[50%] h-auto flex justify-around">
        <img
          src="https://i.pinimg.com/564x/6e/73/76/6e7376f32172f89c56e40b3c2838dbec.jpg"
          className="w-[10%] rounded-2xl"
        ></img>
        <img
          src="https://i.pinimg.com/564x/6e/73/76/6e7376f32172f89c56e40b3c2838dbec.jpg"
          className="w-[10%] rounded-2xl"
        ></img>
        <img
          src="https://i.pinimg.com/564x/6e/73/76/6e7376f32172f89c56e40b3c2838dbec.jpg"
          className="w-[10%] rounded-2xl"
        ></img>
        <img
          src="https://i.pinimg.com/564x/6e/73/76/6e7376f32172f89c56e40b3c2838dbec.jpg"
          className="w-[10%] rounded-2xl"
        ></img>
      </div>
      <h1 className=" text-md ">© Photo, Inc. 2019. We love our users!</h1>
    </div>
  );
}
