import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import SectionWrapper from "../components/SectionWrapper";
import FeaturedCard from "../components/FeaturedCard";
import ProductCard from "../components/ProductCard";
import { Drone } from "lucide-react";
import { Stethoscope } from "lucide-react";
import { Dna } from "lucide-react";
import { Bot } from "lucide-react";
import { Microscope } from "lucide-react";
import { Rocket } from "lucide-react";
import { Marquee } from "../components/Marquee";
import Divider from "@mui/material/Divider";
import { Carousel } from "@material-tailwind/react";

import logo1 from "../assets/tides.png";
import logo2 from "../assets/iitrLogo.png";
import logo3 from "../assets/stpi.png";
import logo4 from "../assets/electropreneurial.png";
import logo5 from "../assets/medtech.png";

const Home = () => {
  const featuredItems = [
    {
      id: "atharvaai",
      title: "AtharvaAI",
      description:
        "A futuristic AI Co-Pilot for General Surgery. Provides real-time inputs to assist surgeons during operations.",
      tagline: "First in the world. IP (Patents) under filing.",
      color: "from-blue-500 to-blue-700",
      icon: <Dna size={44} color="#ffffff" />,
    },
    {
      id: "ai-stethoscope",
      title: "CoeurAI - Stethoscope ",
      description:
        "Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.",
      tagline: "First in the world. IP (Patents) under filing.",
      color: "from-purple-500 to-purple-700",
      icon: <Stethoscope size={44} color="#ffffff" />,
    },
  ];

  const products = [
    {
      id: "robotic-vacuum",
      title: "AI-Powered Robotic Vacuum Cleaners",
      description:
        "Advanced robotic vacuum cleaners with AI navigation and smart home integration.",
      icon: <Bot size={44} color="#ffffff" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: "dinkarai",
      title: "DinkarAI",
      description:
        "Civil infrastructure inspection using drones + AI in real time.",
      icon: <Drone size={44} color="#ffffff" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: "nanobots-cancer",
      title: "Precise Drug Delivery",
      description:
        "Revolutionary nanobots designed for targeted cancer treatment and drug delivery.",
      icon: <Microscope size={44} color="#ffffff" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "placeholder",
      title: "Coming Soon",
      description:
        "We are working on exciting new products. Stay tuned for more innovations.",
      icon: <Rocket size={44} color="#ffffff" />,
      color: "from-gray-500 to-gray-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner />
      <SectionWrapper className="bg-gray-50 font-manrope">
        <Marquee repeat={4} className="[--duration:20s]">
          <span>Robotics</span>
          <Divider orientation="vertical" flexItem />
          <span>Artificial Intelligence</span>
          <Divider orientation="vertical" flexItem />
          <span>Internet of Things</span>
          <Divider orientation="vertical" flexItem />
          <span>Drones</span>
          <Divider orientation="vertical" flexItem />
          <span>Medical Devices</span>
          <Divider orientation="vertical" flexItem />
          <span>Healthcare</span>
          <Divider orientation="vertical" flexItem />
        </Marquee>
      </SectionWrapper>

      {/* About Teaser Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-geist font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare & Automation
          </h2>
          <p className="text-lg font-manrope text-gray-600 mb-8 leading-relaxed">
            At Logicboots, we're pioneering the future of AI-powered robotics,
            creating solutions that transform healthcare delivery and household
            automation. Our cutting-edge technology combines artificial
            intelligence with robotics to solve real-world challenges.
          </p>
          <Link to="/about" className="font-geist btn-primary">
            Learn More About Us
          </Link>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Carousel className="rounded-xl h-96" autoplay={true} loop={true} autoplayDelay={2000}>
            <img
              src="/v1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/v2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="/v3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src="/v4.jpg"
              alt="image 4"
              className="h-full w-full object-cover"
            />
            <img
              src="/v5.jpg"
              alt="image 5"
              className="h-full w-full object-cover"
            />
            <img
              src="/v6.jpg"
              alt="image 6"
              className="h-full w-full object-cover"
            />
            <img
              src="/v7.jpg"
              alt="image 7"
              className="h-full w-full object-cover"
            />
            <img
              src="/v8.jpg"
              alt="image 8"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </SectionWrapper>

      {/* Featured Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured in MedTech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Our innovative solutions are making waves in the medical technology
            industry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedCard key={item.id} {...item} delay={index * 0.2} />
          ))}
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-manrope text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of AI-powered solutions designed to improve lives
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} delay={index * 0.1} />
          ))}
        </div>
      </SectionWrapper>

      {/* Supported By Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-geist text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supported By
          </motion.h2>
        </div>

        {/* === EDITED SECTION START === */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center">
          {/* Top Row Logos (Desktop) */}
          <motion.img 
            src={logo1} 
            alt="TIDES IIT Roorkee" 
            className="w-auto h-[80px] lg:h-[140px] justify-self-center col-span-1 lg:col-span-2" 
          />
          <motion.img 
            src={logo2} 
            alt="Indian Institute of Technology Roorkee" 
            className="w-auto h-[40px] lg:h-[70px] justify-self-center col-span-1 lg:col-span-2" 
          />
          <motion.img 
            src={logo3} 
            alt="Software Technology Parks of India" 
            className="w-auto h-[70px] lg:h-[120px] justify-self-center col-span-2 lg:col-span-2" 
          />
          
          {/* Bottom Row Logos (Desktop) */}
          <motion.img 
            src={logo4} 
            alt="Electropreneurial Park" 
            className="w-auto h-[60px] lg:h-[100px] justify-self-center col-span-1 lg:col-start-2 lg:col-span-2" 
          />
          <motion.img 
            src={logo5} 
            alt="MedTech" 
            className="w-auto h-[60px] lg:h-[100px] justify-self-center col-span-1 lg:col-span-2" 
          />
        </div>
        {/* === EDITED SECTION END === */}
      </SectionWrapper>

      {/* Industries Marquee */}
      <SectionWrapper className="bg-white">
        <Marquee repeat={4} className="[--duration:20s] font-manrope">
          <span>Healthcare</span>
          <Divider orientation="vertical" flexItem />
          <span>Railways</span>
          <Divider orientation="vertical" flexItem />
          <span>Metro</span>
          <Divider orientation="vertical" flexItem />
          <span>Bridge</span>
          <Divider orientation="vertical" flexItem />
          <span>Health Monitoring</span>
          <Divider orientation="vertical" flexItem />
          <span>Civil Infrastructure Inspection</span>
          <Divider orientation="vertical" flexItem />
          <span>Industrial Robotics</span>
          <Divider orientation="vertical" flexItem />
        </Marquee>
      </SectionWrapper>
    </div>
  );
};

export default Home;