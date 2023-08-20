import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-commodus">
      <video className="absolute w-full h-full object-cover" autoPlay loop muted>
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
      <section className="absolute inset-0 bg-black bg-opacity-40" />
      <section className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl md:text-9xl lg:text-11xl font-bold leading-none">
          Pantheon Ecosystem
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-3xl font-extralight">
          The Pinnacle of DeFi Efficiency and Optimization.
        </p>
      </section>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;
