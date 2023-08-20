import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-commodus">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
      <section className="absolute inset-0 bg-black bg-opacity-40" />
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className="text-6xl md:text-9xl lg:text-11xl font-bold leading-none"
          style={{
            background: "linear-gradient(89.35deg, #c5a059, #deb750 28.65%, #e6d48a 51.56%, #f6dd75 76.56%, #c1a05d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pantheon Ecosystem
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-3xl font-extralight font-metropolis">
          The Pinnacle of DeFi Efficiency and Optimization.
        </p>
        <img
          className="absolute top-[1043.5px] left-[calc(50%_-_10.46px)] w-[19.92px] h-[22.5px]"
          alt=""
          src="/down-triangle.svg"
        />
      </section>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;
