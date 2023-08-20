const Footer: React.FC = () => {
  return (
    <div className="w-full h-[30px] font-commodus bg-white text-gray-600">
      <div className="flex space-x-4">
        <div>docs</div>
        <div>media kit</div>
      </div>
      <div className="text-lg text-gray font-arial">
        <span>©</span>
        <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
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
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[60px] font-commodus bg-black text-white flex justify-between items-center px-10 lg:px-20">
      <div className="flex space-x-10 text-2xl font-commodus cursor-pointer">
        <div>DOCS</div>
        <div>MEDIA KIT</div>
      </div>
      <div className="text-lg text-white font-arial flex justify-center items-center font-metropolis text-2xl">
        <span>PANTHEON ECOSYSTEM</span>
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
