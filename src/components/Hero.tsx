const Hero = () => {
    return (
      <section className="bg-darkBlue text-white text-center py-16 px-4">
        <p className="text-sm text-lightBlue uppercase">Welcome</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Selling on the internet like a pro
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We know how large objects will act, but things on a small scale just do
          not act that way.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-lightBlue text-white py-2 px-6 rounded">
            Get Quote Now
          </button>
          <button className="border border-lightBlue text-lightBlue py-2 px-6 rounded">
            Learn More
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  