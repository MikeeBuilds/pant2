import type { NextPage } from "next";

const TVL: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] overflow-hidden bg-[url('/tvl@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[18.34px] text-white font-commodus">
      <div className="absolute top-[-10px] left-[0px] w-[1728px] h-[1127px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(45.39deg,_#000,_rgba(0,_0,_0,_0))] w-[1365px] h-[1127px]" />
        <div className="absolute top-[0px] left-[0px] w-[1728px] h-[220px] overflow-hidden">
          <div className="absolute top-[10px] left-[0px] w-[1728px] h-[210px] overflow-hidden">
            <div className="absolute top-[210px] left-[1728px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-[1728px] h-[210px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[-10px] left-[0px] w-[1876px] h-[1349.27px] overflow-hidden">
        <section className="absolute top-[0px] left-[0px] w-[1728px] h-[1127px] overflow-hidden text-left text-11xl text-white font-commodus">
          <div className="absolute top-[0px] left-[0px] w-[1728px] h-[1127px] overflow-hidden">
            <footer className="absolute top-[843px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0)_65.82%,_rgba(255,_255,_255,_0.2))] w-[1728px] h-[284px]" />
          </div>
          <div className="absolute top-[0px] left-[35px] w-[230px] h-[79px] overflow-hidden">
            <div className="absolute top-[37px] left-[0px] w-[230px] h-[42px]">
              <div className="absolute top-[8px] left-[60px] inline-block w-[170px] h-[25px]">
                Pantheon
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black box-border w-[42px] h-[42px] hidden border-[1px] border-solid border-black" />
              <img
                className="absolute top-[0px] left-[0px] w-[42px] h-[42px] object-cover"
                alt=""
                src="/logo-col-png-1@2x.png"
              />
            </div>
          </div>
        </section>
        <div className="absolute top-[0px] left-[150px] w-[1726px] h-[1349.27px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[743px] h-[927.21px] overflow-hidden">
            <div className="absolute top-[372px] left-[0px] shadow-[3.6673245429992676px_3.6673245429992676px_75px_#000] w-[743px] h-[555.21px]">
              <div className="absolute top-[213.74px] left-[0px] inline-block w-[743px] h-[127.74px]">
                <p className="m-0 [background:linear-gradient(89.35deg,_#c5a059,_#deb750_28.65%,_#e6d48a_51.56%,_#f6dd75_76.56%,_#c1a05d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  $PaNTHEON / $ETH
                </p>
                <p className="m-0 text-[124.69px]">
                  <span className="leading-[111.85px]">
                    <span>0.282828</span>
                    <span className="text-[66.01px]">{` `}</span>
                    <span className="text-[57.21px]">eth</span>
                  </span>
                </p>
              </div>
              {/* ... */}
            </div>
          </div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default TVL;