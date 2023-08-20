import React, { useState } from 'react';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-5 px-4 lg:px-0">
        <div className="flex items-center gap-2 pl-4 lg:pl-0">
          <img src="/logo-col-png-1@2x.png" alt="logo" className="w-10 h-10 object-contain" />
          <h3 className="text-white text-3xl font-commodus">Pantheon</h3>
        </div>
        <ul className="list-none hidden lg:flex flex-row gap-10 text-white text-3xl font-commodus">
          <li>Learn</li>
          <li>Docs</li>
          <li>DAPP</li>
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center pr-4">
          <img
            src={toggle ? "/close-icon.svg" : "/menuburgerfreeiconfont-1.svg"}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 text-white text-3xl font-commodus">
              <li onClick={() => setToggle(!toggle)}>Learn</li>
              <li onClick={() => setToggle(!toggle)}>Docs</li>
              <li onClick={() => setToggle(!toggle)}>DAPP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
