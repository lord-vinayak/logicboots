import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import SectionWrapper from '../components/SectionWrapper';
import FeaturedCard from '../components/FeaturedCard';
import ProductCard from '../components/ProductCard';
import {Drone} from 'lucide-react'
import {Stethoscope} from 'lucide-react'
import {Dna} from 'lucide-react'
import {Bot} from 'lucide-react'
import {Microscope} from 'lucide-react'
import {Rocket} from 'lucide-react'

import logo1 from '../assets/iitrLogo.png';
import logo2 from '../assets/Screenshot_20250824_225151.png';
import logo3 from '../assets/Screenshot_20250824_221237.png';
import logo4 from '../assets/Screenshot_20250824_221402.png';
import logo5 from '../assets/Untitleddesign7-1733725733552.png';


const Home = () => {
  const featuredItems = [
    {
      id: 'dinkarai',
      title: 'DinkarAI',
      description: 'Civil infrastructure inspection using drones + AI in real time. Currently deployed for Metro bridge inspections, expanding soon into railways. The drone detects cracks, leakage, bulging in bearings etc., in real time.',
      tagline: 'First in the world. IP (Patents) under filing.',
      color: 'from-purple-500 to-purple-700',
      icon: <Drone size={44} color="#ffffff" />
    },
    {
      id: 'atharvaai',
      title: 'AtharvaAI',
      description: 'A futuristic AI Co-Pilot for General Surgery. Provides real-time inputs to assist surgeons during operations.',
      tagline: 'First in the world. IP (Patents) under filing.',
      color: 'from-blue-500 to-blue-700',
      icon: <Dna size={44} color="#ffffff" />
    }
  ];

  const products = [
    {
      id: 'robotic-vacuum',
      title: 'AI-Powered Robotic Vacuum Cleaners',
      description: 'Advanced robotic vacuum cleaners with AI navigation and smart home integration.',
      icon: <Bot size={44} color="#ffffff" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ai-stethoscope',
      title: 'AI-Powered Stethoscope with Remote Monitoring',
      description: 'Smart stethoscope with AI-powered diagnosis and remote patient monitoring capabilities.',
      icon: <Stethoscope size={44} color="#ffffff" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'nanobots-cancer',
      title: 'Precise Drug Delivery',
      description: 'Revolutionary nanobots designed for targeted cancer treatment and drug delivery.',
      icon: <Microscope size={44} color="#ffffff" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'placeholder',
      title: 'Coming Soon',
      description: 'We are working on exciting new products. Stay tuned for more innovations.',
      icon: <Rocket size={44} color="#ffffff" />,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner />
      
      {/* About Teaser Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare & Automation
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Logicboots, we're pioneering the future of AI-powered robotics, creating solutions that transform 
            healthcare delivery and household automation. Our cutting-edge technology combines artificial intelligence 
            with robotics to solve real-world challenges.
          </p>
          <Link to="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </motion.div>
      </SectionWrapper>
      
      {/* Featured Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured in MedTech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our innovative solutions are making waves in the medical technology industry
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredItems.map((item, index) => (
            <FeaturedCard
              key={item.id}
              {...item}
              delay={index * 0.2}
            />
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our range of AI-powered solutions designed to improve lives
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper >
      <SectionWrapper className="bg-gray-50"> 
          <div className='text-center mb-12'>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Supported By
          </motion.h2>
          {/* Logo Container */}
            <div className="mt-12">

              {/* Row 1: Centered with space between */}
              <div className="flex justify-around items-center">
                <motion.img variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} src={logo5} alt="IIT Roorkee" className="h-14 w-auto" />
                <motion.img variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} src={logo1} alt="Company 2" className="h-14 w-auto" />
                <motion.img variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} src={logo3} alt="MeitY" className="h-14 w-auto" />
              </div>

              {/* Row 2: Left-aligned with custom margin */}
              <div className="mt-10 flex justify-center items-center gap-x-20 md:justify-start md:ml-64">
                <motion.img variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} src={logo4} alt="STPI" className="h-14 w-auto" />
                <motion.img variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} src={logo2} alt="TIDES" className="h-14 w-auto" />
              </div>

            </div>
          </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
