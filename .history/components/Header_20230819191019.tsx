import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="absolute top-[26px] left-[1374px] w-[319px] h-[29px] text-mini">
        <div className="absolute top-[8px] left-[94px] hidden w-[71px] h-[13px]">explore</div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[0px] text-3xl font-commodus text-white text-center inline-block w-[78px] h-[21px]">
          Learn
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[108px] w-[87px] h-[21px] flex flex-row items-center justify-start gap-[4px]">
          <img className="relative w-[17px] h-[17px] overflow-hidden shrink-0" alt="" src="/menuburgerfreeiconfont-1.svg" />
          <div className="relative text-3xl font-commodus text-white text-left inline-block w-[66px] h-[21px] shrink-0">docs</div>
        </button>
        <button className="cursor-pointer [border:none] py-[3px] px-0 bg-[transparent] absolute top-[0px] left-[224px] rounded [background:linear-gradient(90deg,_#c5a059,_#deb750_22.92%,_#e6d48a_46.35%,_#f6dd75_75.52%,_#b3914c)] w-[95px] h-[29px] flex flex-col box-border items-center justify-end">
          <div className="relative text-3xl font-commodus text-black text-center inline-block w-[77px] h-[22px] shrink-0">DAPP</div>
        </button>
      </div>
      <div className="absolute top-[20px] left-[35px] w-[230px] h-[42px] text-11xl">
        <h3 className="m-0 absolute top-[8px] left-[60px] text-inherit font-normal font-inherit inline-block w-[170px] h-[25px]">Pantheon</h3>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black box-border w-[42px] h-[42px] hidden border-[1px] border-solid border-black" />
        <img className="absolute top-[0px] left-[0px] w-[42px] h-[42px] object-cover" alt="" src="/logo-col-png-1@2x.png" />
      </div>
    </div>
  );
};

export default Header;
