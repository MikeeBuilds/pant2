import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[30px] bg-transparent flex justify-center items-center font-commodus">
      <div className="text-lg text-gray-600 font-arial">
        <span>©</span>
        <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
      </div>
      <div className="ml-4 text-gray-600 font-arial">docs</div>
      <div className="ml-4 text-gray-600 font-arial">media kit</div>
      <img
        className="ml-4 w-6 h-6 object-cover"
        alt=""
        src="/discord@2x.png"
      />
      <img
        className="ml-4 w-6 h-6 object-cover"
        alt=""
        src="/twitter@2x.png"
      />
      <img
        className="ml-4 w-6 h-6 object-cover"
        alt=""
        src="/medium@2x.png"
      />
    </div>
  );
};

export default Footer;