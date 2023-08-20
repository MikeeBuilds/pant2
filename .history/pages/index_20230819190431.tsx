import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] overflow-hidden text-left text-[29px] text-white font-commodus">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-[631px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.8))] w-[1728px] h-[486px]" />
      <img
        className="absolute top-[1043.5px] left-[calc(50%_-_10.46px)] w-[19.92px] h-[22.5px]"
        alt=""
        src="/down-triangle.svg"
      />
      <div className="absolute top-[985px] left-[calc(50%_-_348px)] leading-[0%] font-extralight font-metropolis text-center inline-block w-[696px] h-[31px]">
        The Pinnacle of DeFi Efficiency and Optimization.
      </div>
      <section
        style={{
          position: "absolute",
          top: "156px",
          left: "calc(50% - 735px)",
          fontSize: "120px",
          fontFamily: "Commodus",
          background: "linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          display: "inline-block",
          width: "1469px",
          height: "130px", // Adjust as needed
          lineHeight: "1.2", // Adjust as needed
        }}
      >
        Pantheon Ecosystem
      </section>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;
