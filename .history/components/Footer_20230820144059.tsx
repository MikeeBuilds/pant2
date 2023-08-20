import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[50px] font-commodus text-white flex justify-between items-center px-10 lg:px-20 glassmorphism-bg">
      <div className="flex space-x-8 text-xl font-commodus cursor-pointer">
        <div>DOCS</div>
        <div>MEDIA KIT</div>
      </div>
      <div className="text-white flex justify-center items-center font-metropolis text-xl">
        <span>Pantheon Ecosystem<span>©</span></span>
      </div>
      <div className="flex space-x-4">
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/discord@2x.png" />
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/twitter@2x.png" />
        <img className="w-[30px] h-[30px] object-cover" alt="" src="/medium@2x.png" />
      </div>
    </div>
  );
};

export default Footer;
