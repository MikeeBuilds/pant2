import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] md:h-screen overflow-hidden bg-[url('/road-map@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-lg text-white font-commodus">
      <div className="absolute top-[631px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-[1728px] h-[486px]" />
      <div className="absolute top-[165px] left-[1728px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.4))] w-[1728px] h-[165px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <div className="absolute top-[1072px] left-[191px] w-[1346px] h-[30px]">
        {/* ... other code ... */}
      </div>
      <main className="absolute top-[calc(50%_-_406.5px)] left-[calc(50%_-_739px)] rounded-[30px] bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[rgba(255,255,255,0.1)] shadow-[15px 15px 55px rgba(0,0,0,0.5)] backdrop-filter blur-[15px] w-[1477px] h-[813px] text-center text-61xl text-white font-metropolis">
        {/* ... other code ... */}
        <h1 className="m-0 absolute top-[131px] left-[calc(50%_+_38.5px)] text-6xl md:text-8xl font-normal font-commodus text-gradient inline-block text-shadow-[0px 0px 75px #000] mix-blend-normal">
          Mission
        </h1>
        <h1 className="m-0 absolute top-[131px] left-[calc(50%_-_658.5px)] text-6xl md:text-8xl font-normal font-commodus text-gradient inline-block text-shadow-[0px 0px 75px #000] mix-blend-normal">
          Roadmap
        </h1>
      </main>
      <div className="absolute top-[33px] left-[1374px] w-[319px] h-[29px] text-3xl">
        {/* ... other code ... */}
      </div>
      <div className="absolute top-[27px] left-[35px] w-[230px] h-[42px] text-11xl">
        {/* ... other code ... */}
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
