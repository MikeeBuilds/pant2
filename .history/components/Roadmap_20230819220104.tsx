import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-no-repeat bg-top text-left text-lg text-white font-commodus" style={{ backgroundImage: "url('/road-map@3x.png')" }}>
      <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-80 w-full h-1/2 md:h-1/3 lg:h-[486px]" />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-40 transform rotate-180 w-full h-1/2 md:h-1/3 lg:h-[165px]" />
      <div className="absolute bottom-0 left-0 w-full h-[30px] flex justify-between items-center px-4 lg:px-[191px]">
        <div className="flex space-x-4">
          <div>docs</div>
          <div>media kit</div>
        </div>
        <div className="flex space-x-4">
          <img className="w-[30px] h-[30px] object-cover" alt="" src="/discord@2x.png" />
          <img className="w-[30px] h-[30px] object-cover" alt="" src="/twitter@2x.png" />
          <img className="w-[30px] h-[30px] object-cover" alt="" src="/medium@2x.png" />
        </div>
        <div className="text-lg text-gray font-arial flex justify-center items-center w-full">
          <span>©</span>
          <span className="font-medium font-metropolis"> Pantheon Ecosystem</span>
        </div>
      </div>
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-gradient-to-r from-transparent via-gray-100 to-transparent backdrop-blur-md shadow-lg w-full h-full md:w-[80%] lg:w-[1477px] lg:h-[813px] text-center text-6xl text-white font-metropolis">
        <img className="absolute top-[351px] left-[829px] w-[516.84px] h-[360.62px] object-cover" alt="" src="/white-paper@2x.png" />
        <div className="absolute top-[247px] left-[829px] text-lg inline-block w-[502px] h-[104px] text-shadow-md">
          <p className="m-0">At the heart of the Pantheon Ecosystem is a</p>
          <p className="m-0">
            singular mission: to sculpt a synergic DeFi environment,
            meticulously composed of various products. Each element, when
            combined, aims to yield the pinnacle of efficiency, optimization,
            and stellar results within the decentralized finance realm.
          </p>
        </div>
        <h1 className="m-0 absolute top-[131px] left-[calc(50%+_38.5px)] text-inherit font-normal font-commodus" style={{ background: 'linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0px 0px 75px #000', mixBlendMode: 'normal' }}>
          Mission
        </h1>
        <div className="absolute top-[247px] left-[129px] inline-block w-[502px] h-[435px] text-shadow-md text-xl">
          <p className="m-0">
            <b>Our vision is expansive, yet precise.</b>
          </p>
          <p className="m-0">
            <b>
              <span className="[text-decoration:underline]">
                The roadmap to achieve this is twofold:
              </span>
            </b>
          </p>
          <p className="m-0 text-lg">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="font-black">
                $PANTHEON: THE REVOLUTIONARY TOKEN
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                Integral to the Pantheon Ecosystem is $PANTHEON, an avant-garde
                financial instrument set to revolutionize our perception of
                Tokenomics. Its unique design ensures an unwavering appreciation
                against its backing asset, predominantly serving as a store of
                value for $ETH. Breaking traditional molds, $PANTHEON doesn't
                engage in a PVP (Player versus Player) model. Instead, every
                Mint and Burn action invariably drives its price higher in terms
                of $ETH. The very mechanics—minting, burning, and a strategic
                tax allocation—pledge a promise: a token
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>that only knows ascension.</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="font-black">A PIONEERING LENDING PROTOCOL:</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                Following the successful establishment of $PANTHEON, the
                ecosystem will introduce an innovative lending protocol. This
                will empower users to leverage farm $PANTHEON and a curated
                selection of other tokens.
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>
                All of this will be made possible through an overcollateralized
                StableCoin, ensuring both
              </span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span>security and growth for participants.</span>
            </span>
          </p>
        </div>
        <h1 className="m-0 absolute top-[131px] left-[calc(50%-_658.5px)] text-inherit font-normal font-commodus" style={{ background: 'linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0px 0px 75px #000', mixBlendMode: 'normal' }}>
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
