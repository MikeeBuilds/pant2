import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bgRoadmap.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-80 w-full h-1/2 md:h-1/3 lg:h-[486px]" />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-40 transform rotate-180 w-full h-1/2 md:h-1/3 lg:h-[165px]" />
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full h-full md:w-[80%] lg:w-[1477px] lg:h-[813px] text-center text-xl text-white font-metropolis">
        <div className="relative w-full md:w-[45%] h-[80%] rounded-[30px] bg-gradient-to-r from-transparent via-gray-100 to-transparent backdrop-blur-md shadow-lg p-4">
          <h1 className="text-inherit font-normal font-commodus text-4xl md:text-5xl lg:text-6xl" style={{ background: 'linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0px 0px 75px #000', mixBlendMode: 'normal' }}>
            Roadmap
          </h1>
          <p>Our vision is expansive, yet precise.</p>
          <p>The roadmap to achieve this is twofold:</p>
          <p><b>$PANTHEON: THE REVOLUTIONARY TOKEN</b></p>
          <p>Integral to the Pantheon Ecosystem is $PANTHEON, an avant-garde financial instrument set to revolutionize our perception of Tokenomics. Its unique design ensures an unwavering appreciation against its backing asset, predominantly serving as a store of value for $ETH. Breaking traditional molds, $PANTHEON doesn't engage in a PVP (Player versus Player) model. Instead, every Mint and Burn action invariably drives its price higher in terms of $ETH. The very mechanics—minting, burning, and a strategic tax allocation—pledge a promise: a token that only knows ascension.</p>
          <p><b>A PIONEERING LENDING PROTOCOL:</b></p>
          <p>Following the successful establishment of $PANTHEON, the ecosystem will introduce an innovative lending protocol. This will empower users to leverage farm $PANTHEON and a curated selection of other tokens. All of this will be made possible through an overcollateralized StableCoin, ensuring both security and growth for participants.</p>
        </div>
        <div className="relative w-full md:w-[45%] h-[80%] rounded-[30px] bg-gradient-to-r from-transparent via-gray-100 to-transparent backdrop-blur-md shadow-lg p-4">
          <h1 className="text-inherit font-normal font-commodus text-4xl md:text-5xl lg:text-6xl" style={{ background: 'linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0px 0px 75px #000', mixBlendMode: 'normal' }}>
            Mission
          </h1>
          <p>At the heart of the Pantheon Ecosystem is a singular mission: to sculpt a synergic DeFi environment, meticulously composed of various products. Each element, when combined, aims to yield the pinnacle of efficiency, optimization, and stellar results within the decentralized finance realm.</p>
          <img className="w-[516.84px] h-[360.62px] object-cover mt-4" alt="" src="/white-paper@2x.png" />
        </div>
      </main>
      <div className="absolute top-[33px] left-[1374px] w-[319px] h-[29px] text-3xl md:hidden">
        <div className="absolute top-[8px] left-[94px] text-mini w-[71px] h-[13px]">
          explore
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
