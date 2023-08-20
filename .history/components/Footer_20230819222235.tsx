import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="absolute top-[1072px] left-[191px] w-[1346px] h-[30px] font-commodus">
      <div className="absolute top-[5px] left-[calc(50%_-_101px)] text-lg text-gray font-arial">
        <span>©</span>
        <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
      </div>
      <div className="absolute top-[4px] left-[0px]">docs</div>
      <div className="absolute top-[4px] left-[111px]">media kit</div>
      <img
        className="absolute top-[0px] left-[1259px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/discord@2x.png"
      />
      <img
        className="absolute top-[0px] left-[1202px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/twitter@2x.png"
      />
      <img
        className="absolute top-[0px] left-[1316px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/medium@2x.png"
      />
    </div>
  );
};

export default Footer;
