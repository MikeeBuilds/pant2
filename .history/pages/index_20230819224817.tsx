import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-[1117px] md:h-screen overflow-hidden text-white font-commodus">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-[631px] md:top-1/2 left-0 w-full h-[486px] md:h-1/2 bg-gradient-to-b from-transparent to-black" />
      <img
        className="absolute top-[1043.5px] md:top-[90%] left-[calc(50%_-_10.46px)] w-[19.92px] h-[22.5px]"
        alt=""
        src="/down-triangle.svg"
      />
      <div className="absolute top-[985px] md:top-[80%] left-[calc(50%_-_348px)] md:left-1/2 transform md:-translate-x-1/2 leading-[0%] font-extralight font-metropolis text-center inline-block w-[696px] h-[31px] md:w-full md:text-lg">
        The Pinnacle of DeFi Efficiency and Optimization.
      </div>
      <section
        className="absolute top-[156px] md:top-[10%] left-1/2 transform -translate-x-1/2 text-center"
        style={{
          fontSize: "6vw", // Responsive font size
          fontFamily: "Commodus",
          background: "linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "80%", // Responsive width
          height: "auto", // Auto height
          lineHeight: "1.2", 
        }}
      >
        Pantheon Ecosystem
      </section>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;
