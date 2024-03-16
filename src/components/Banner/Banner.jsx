const Banner = () => {
  return (
    <section>
      <div
        className="hero min-h-[600px] mt-8 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(https://plus.unsplash.com/premium_photo-1663126620579-567a7ccc48f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className=" rounded-2xl "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl font-bold">
              Crafting Culinary Mastery: Elevate Your Palate with Bespoke Dining
              Experiences at{" "}
            </h1>
            <p className="mb-5">
              Explore the art of gastronomy and ignite your taste buds with our
              exclusive cooking classes, meticulously tailored to your culinary
              preferences.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-error">Explore now</button>
              <button className="btn btn-outline btn-error">Your feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
