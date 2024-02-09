import React from 'react';
// ('use client');

import { useRouter } from 'next/navigation';
export default function Comp2() {
  // const router = useRouter();

  return (
    <div className="w-screen h-[500px] flex justify-center items-center bg-white flex-col gap-10 text-black">
      <h1 className="font-bold text-xl">You're in good company</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="w-[60%] grid grid-cols-4 gap-10">
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
        <img
          src="https://i.pinimg.com/736x/0f/39/46/0f39460ecbc7a01d7e6082d5b188b1e3.jpg"
          className="w-[70%]"
        ></img>
      </div>
      <button
        className="w-20 h-8 border border-1 gap-10 bg-zinc-400 rounded text-white"
        // onClick={() => router.push('/news')}
      >
        <p className=" text-sm">Learn More</p>
      </button>
    </div>
  );
}
