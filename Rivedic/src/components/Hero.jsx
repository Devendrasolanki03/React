import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/videos/hero-bg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Dark Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/75" />

      {/* 🌟 Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT CONTENT */}
          <div className="animate-fade-in-up">
            <span
              className="inline-block mb-6 px-5 py-2 rounded-full
              bg-amber-400/15 text-amber-400 font-semibold text-sm"
            >
              100% Pure Himalayan Shilajit
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Nature&apos;s Most Powerful <br />
              <span className="text-amber-400">Wellness Secret</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 max-w-xl">
              Experience the ancient power of pure Shilajit resin, harvested
              from the pristine Himalayan mountains to boost energy and
              vitality.
            </p>
            <div className="flex gap-4">
              <Link
                to="/product/1"
                className="px-8 py-4 rounded-lg font-semibold
                bg-amber-500 text-black
                hover:bg-amber-400 transition shadow-lg"
              >
                Shop Now →
              </Link>

              <Link
                to="/benefits"
                className="px-8 py-4 rounded-lg font-semibold
                border border-white/30 text-white
                hover:bg-white/10 backdrop-blur transition"
              >
                Learn More
              </Link>
            </div>
            {/* STATS
            <div className="flex gap-10 mt-14 text-white">
              <Stat value="85+" label="Minerals" />
              <Stat value="100%" label="Pure" />
              <Stat value="Lab" label="Tested" />
            </div>
          </div>
          RIGHT PRODUCT
          <div className="relative hidden md:block animate-float">
            <div className="rounded-[2.5rem] p-6 bg-white/90 backdrop-blur-xl shadow-2xl">
              <div className="bg-white rounded-[2rem] p-10 text-center">
                <img
                  src="/src/assets/images/shilajit-hero.png.jpeg"
                  alt="Shilajit Resin"
                  className="mx-auto w-72"
                />
                <h3 className="font-semibold mt-6">Shilajit Resin</h3>
                <p className="text-sm text-gray-500">Premium Quality</p>
              </div>
            </div> */}
            {/* Rating Badge
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <div className="font-bold text-lg">4.9 / 5</div>
                <div className="text-sm text-gray-500">2000+ Reviews</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Stat Component */
const Stat = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold text-amber-400">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

export default Hero;
