import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <main className="absolute top-[calc(50%_-_406.5px)] left-[calc(50%_-_739px)] rounded-[30px] [background:linear-gradient(106.86deg,_rgba(0,_0,_0,_0.1),_rgba(29,_29,_29,_0.1)_18.75%,_rgba(128,_128,_128,_0.1)_81.25%,_rgba(255,_255,_255,_0.1))] shadow-[15px_15px_55px_rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(15px)] w-[1477px] h-[813px] text-center text-61xl text-white font-metropolis">
      <img
        className="absolute top-[351px] left-[829px] w-[516.84px] h-[360.62px] object-cover"
        alt=""
        src="/white-paper@2x.png"
      />
      <div className="absolute top-[247px] left-[829px] text-lg inline-block w-[502px] h-[104px] [text-shadow:0px_0px_30px_#000]">
        <p className="m-0">At the heart of the Pantheon Ecosystem is a</p>
        <p className="m-0">
          singular mission: to sculpt a synergic DeFi environment,
          meticulously composed of various products. Each element, when
          combined, aims to yield the pinnacle of efficiency, optimization,
          and stellar results within the decentralized finance realm.
        </p>
      </div>
      <h1 className="m-0 absolute top-[131px] left-[calc(50%_+_38.5px)] text-inherit font-normal font-commodus [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[620px] h-[116px] [text-shadow:0px_0px_75px_#000] mix-blend-normal">
        Mission
      </h1>
      <div className="absolute top-[247px] left-[129px] inline-block w-[502px] h-[435px] [text-shadow:0px_0px_30px_#000] text-xl">
        {/* Content here */}
      </div>
      <h1 className="m-0 absolute top-[131px] left-[calc(50%_-_658.5px)] text-inherit font-normal font-commodus [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[620px] h-[116px] [text-shadow:0px_0px_75px_#000] mix-blend-normal">
        roadmap
      </h1>
    </main>
  );
};

export default Roadmap;
