import React from "react";

export const Navbar = () => {
  return (
    <div className="flex  bg-slate-400">
      <div className="m-auto">
        <ul className="flex p-2">
          <li className="px-2">Home</li>
          <li className="px-2">Categories</li>
          <li className="px-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};
