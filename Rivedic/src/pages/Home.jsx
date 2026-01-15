import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { Star, Shield, Truck, Award } from "lucide-react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Premium Shilajit Resin – 20g",
      description:
        "Pure Himalayan Shilajit with 85+ trace minerals to restore natural vitality.",
      price: 1999,
      image: "/src/assets/images/shilajit-hero.png.jpeg",
    },
  ];

  const features = [
    { icon: Shield, title: "Lab Tested", desc: "Certified purity & safety" },
    { icon: Star, title: "Premium Grade", desc: "Authentic Himalayan resin" },
    { icon: Truck, title: "Free Shipping", desc: "Across India" },
    { icon: Award, title: "30-Day Guarantee", desc: "Risk-free purchase" },
  ];
  const benefits = [
    {
      icon: "⚡",
      title: "Natural Energy",
      description: "Sustained vitality without stimulants",
    },
    {
      icon: "🧠",
      title: "Mental Balance",
      description: "Supports focus and clarity",
    },
    {
      icon: "💪",
      title: "Physical Strength",
      description: "Enhances endurance and recovery",
    },
    {
      icon: "🛡️",
      title: "Immunity Support",
      description: "Rich in fulvic acid & antioxidants",
    },
  ];

  return (
    <div className="bg-[#F7F3E8] overflow-hidden">
      <Hero />

      <section className="relative py-20 bg-[#f7f3e8] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/himalaya-texture.png')]
    bg-center bg-cover opacity-[0.07]"
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="card p-6 text-center
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-green-700" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🏔️ PRODUCT */}
      <section className="py-28 bg-[#EFE6D2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#2F6F4E] mb-4">
              Our Himalayan Offering
            </h2>
            <p className="text-lg text-[#6B6B5E] max-w-xl mx-auto">
              Hand-purified Shilajit sourced from pristine Himalayan altitudes
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-sm">
              <ProductCard product={products[0]} />
            </div>
          </div>
        </div>
      </section>

      {/* 🌱 BENEFITS */}
      <section
        id="benefits"
        className="relative py-24 overflow-hidden
  bg-[#f6f3e7]"
      >
        {/* Herbal background */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/ayurvedic-leaf.png')]
    bg-repeat bg-center opacity-[0.06]"
        />

        <div className="relative z-10 container mx-auto px-4">
          {/* your existing benefits content */}
        </div>
      </section>

      {/* 🧘 TESTIMONIALS */}
      <section className="py-28 bg-[#EFE6D2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#2F6F4E]">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#FFFCF4] rounded-2xl p-8 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 fill-[#C89B3C] text-[#C89B3C]"
                    />
                  ))}
                </div>

                <p className="text-sm text-[#5F5F52] mb-6">
                  “This Shilajit feels pure and grounding. My energy and focus
                  improved naturally.”
                </p>

                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-[#6B6B5E]">Mumbai, India</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
