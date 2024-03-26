import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-white p-4">
      {/* first  */}

      <div className="flex">
        <img src="/images/logo.png" alt=""  className="h-[25px]"/>
        <h1 className=" ml-1 text-2xl">Ayush</h1>
      </div>

      {/* second  */}
      <div>
        <ul className="flex gap-16 cursor-pointer">
          <li>About</li>
          <li>Servicing</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      {/* third  */}

      <div>
        <button className="border-2 py-1 px-3">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
