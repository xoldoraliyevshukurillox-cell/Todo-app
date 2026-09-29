import { useState } from "react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col border-r bg-white transition-all w-89.75">
      <button className="p-6 text-gray-700">
       <img src="/menu 1.svg" alt="" width={32} height={32}/>
      </button>
        <div className="flex flex-col items-center px-6 pb-6">
          <img src="/18000.jpg" alt="avatar" className="mb-3 h-16 w-16 rounded-full object-cover"
          />
          <p className="font-bold text-[24px] text-black">Shukurilloh</p>
          <p className="text-[20px] font-normal text-black ">shukurilloh@gmail.com</p>
        </div>
      <nav className="flex flex-1 flex-col gap-1 p-4">
        <button className="flex items-center gap-3 rounded-lg  px-4 py-3 font-bold text-[24px] text-black">
          <img src="/list-todo 1.svg" alt="" width={32} height={32}/>
          My Tasks
        </button>
        <button className="flex items-center gap-3 rounded-lg px-4 py-3 font-bold text-[24px] text-black ">
          <img src="/menu settings.svg" alt="" width={32} height={32}/>
          Settings
          </button>
      </nav>
    </aside>
  );
}