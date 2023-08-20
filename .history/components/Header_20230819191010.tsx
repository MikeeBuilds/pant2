import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="absolute top-[26px] left-[1374px] md:left-[20px] w-[319px] h-[29px] text-mini flex justify-between">
        <div className="flex items-center">
          <img className="hidden md:block absolute top-[0px] left-[0px] w-[42px] h-[42px] object-cover" alt="" src="/logo-col-png-1@2x.png" />
          <h3 className="hidden md:block m-0 absolute top-[8px] left-[60px] text-inherit font-normal font-inherit inline-block w-[170px] h-[25px]">Pantheon</h3>
        </div>
        <div className="hidden md:flex gap-[30px]">
          <button className="cursor-pointer text-3xl font-commodus text-white">Learn</button>
          <button className="cursor-pointer text-3xl font-commodus text-white">Explore</button>
          <button className="cursor-pointer text-3xl font-commodus text-white">Docs</button>
          <button className="cursor-pointer text-3xl font-commodus text-black bg-gradient-to-r from-[#c5a059] via-[#deb750] to-[#f6dd75] rounded py-[3px] px-[10px]">DAPP</button>
        </div>
        <button className="md:hidden cursor-pointer text-3xl font-commodus text-white">
          <img className="relative w-[17px] h-[17px] overflow-hidden shrink-0" alt="" src="/menuburgerfreeiconfont-1.svg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
