import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] overflow-hidden bg-[url('/road-map@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-lg text-white font-commodus">
      <div className="absolute top-[631px] left-0 bg-gradient-to-b from-transparent via-black to-black w-[1728px] h-[486px]" />
      <div className="absolute top-[165px] left-[1728px] bg-gradient-to-b from-transparent via-black to-black w-[1728px] h-[165px] transform rotate-180 origin-top-left" />
      <div className="absolute top-[1072px] left-[191px] w-[1346px] h-[30px]">
        <div className="absolute top-[5px] left-[calc(50%-101px)] text-lg text-gray font-arial">
          <span>©</span>
          <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
        </div>
        <div className="absolute top-[4px] left-0">docs</div>
        <div className="absolute top-[4px] left-[111px]">media kit</div>
        <img className="absolute top-0 left-[1259px] w-[30px] h-[30px] object-cover" alt="" src="/discord@2x.png" />
        <img className="absolute top-0 left-[1202px] w-[30px] h-[30px] object-cover" alt="" src="/twitter@2x.png" />
        <img className="absolute top-0 left-[1316px] w-[30px] h-[30px] object-cover" alt="" src="/medium@2x.png" />
      </div>
      <main className="absolute top-[calc(50%-406.5px)] left-[calc(50%-739px)] rounded-[30px] bg-gradient-to-r from-transparent via-gray-100 to-white shadow-[15px 15px 55px rgba(0,0,0,0.5)] backdrop-blur-[15px] w-[1477px] h-[813px] text-center text-61xl text-white font-metropolis">
        <img className="absolute top-[351px] left-[829px] w-[516.84px] h-[360.62px] object-cover" alt="" src="/white-paper@2x.png" />
        <div className="absolute top-[247px] left-[829px] text-lg inline-block w-[502px] h-[104px] text-shadow-[0px 0px 30px #000]">
          <p className="m-0">At the heart of the Pantheon Ecosystem is a</p>
          <p className="m-0">
            singular mission: to sculpt a synergic DeFi environment,
            meticulously composed of various products. Each element, when
            combined, aims to yield the pinnacle of efficiency, optimization,
            and stellar results within the decentralized finance realm.
          </p>
        </div>
        <h1 className="m-0 absolute top-[131px] left-[calc(50%+_38.5px)] text-inherit font-normal font-commodus bg-gradient-to-r from-[#c5a059] via-[#deb750] to-[#c1a05d] -webkit-background-clip:text -webkit-text-fill-color:transparent inline-block w-[620px] h-[116px] text-shadow-[0px 0px 75px #000] mix-blend-normal">
          Mission
        </h1>
        <div className="absolute top-[247px] left-[129px] inline-block w-[502px] h-[435px] text-shadow-[0px 0px 30px #000] text-xl">
          {/* Content here */}
        </div>
        <h1 className="m-0 absolute top-[131px] left-[calc(50%-658.5px)] text-inherit font-normal font-commodus bg-gradient-to-r from-[#c5a059] via-[#deb750] to-[#c1a05d] -webkit-background-clip:text -webkit-text-fill-color:transparent inline-block w-[620px] h-[116px] text-shadow-[0px 0px 75px #000] mix-blend-normal">
          roadmap
        </h1>
      </main>
      <div className="absolute top-[33px] left-[1374px] w-[319px] h-[29px] text-3xl">
        <div className="absolute top-[8px] left-[94px] text-mini hidden w-[71px] h-[13px]">
          explore
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
