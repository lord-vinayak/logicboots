import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SectionWrapper from "../components/SectionWrapper";
import { Stethoscope, Bot, Microscope, Rocket } from "lucide-react";

// Import the carousel and its styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const ProductDetail = () => {
  const { id } = useParams();

  const productData = {
    "robotic-vacuum": {
      title: "AI-Powered Robotic Vacuum Cleaners",
      subtitle: "Smart Home Cleaning with Advanced AI Navigation",
      backgroundVideo: "/images/vaccum.mp4", // Video for this product
      gallery: [
        "/images/vaccum.mp4",
        "/images/img5.jpeg",
        "/images/img2.jpeg",
        "/images/img4.jpeg",
      ],
      description: "Our AI-powered robotic vacuum cleaners represent the next generation of smart home cleaning, combining cutting-edge robotics with intelligent navigation and automation.",
      longDescription: `These advanced robotic vacuum cleaners utilize sophisticated AI algorithms to navigate complex home environments, learning from each cleaning session to optimize performance. The system features advanced obstacle detection, room mapping, and adaptive cleaning patterns that ensure thorough coverage while avoiding potential hazards.`,
      features: ["AI-powered navigation and mapping", "Advanced obstacle detection and avoidance", "Adaptive cleaning patterns", "Smart home integration", "Remote monitoring and control", "Long battery life with auto-charging", "HEPA filtration system", "Customizable cleaning schedules"],
      specifications: ["Battery Life: Up to 120 minutes", "Coverage Area: Up to 2000 sq ft", "Noise Level: <65 dB", 'Dimensions: 13.8" x 13.8" x 3.6"', "Weight: 6.5 lbs", "Connectivity: Wi-Fi, Bluetooth", "App Support: iOS & Android"],
      benefits: ["Effortless cleaning automation", "Improved indoor air quality", "Time-saving convenience", "Energy-efficient operation", "Reduced manual cleaning effort"],
      icon: <Bot size={44} color="#ffffff" />,
      color: "from-green-500 to-green-600",
    },
    "ai-stethoscope": {
      title: "AI-Powered Stethoscope",
      subtitle: "Revolutionary Digital Auscultation with AI Diagnosis",
      gallery: [ // Example: Video added here
        "/images/i1.jpeg",
        "/images/i4.jpeg",
        "/images/i3.jpeg",
        "/images/i5.jpeg",
      ],
      description: "Our AI-powered stethoscope transforms traditional auscultation into a digital, intelligent diagnostic tool that provides real-time analysis and remote monitoring capabilities.",
      longDescription: `This revolutionary device combines high-fidelity audio capture with advanced AI algorithms to analyze heart, lung, and other bodily sounds in real-time. The AI system can detect subtle abnormalities, compare findings with extensive medical databases, and provide preliminary diagnostic suggestions to healthcare professionals.`,
      features: ["High-fidelity audio capture", "Real-time AI analysis", "Remote monitoring capabilities", "Cloud-based data storage", "Integration with EMR systems", "Multi-frequency analysis", "Patient data encryption", "Mobile app compatibility"],
      specifications: ["Audio Frequency Range: 20Hz - 20kHz", "Battery Life: Up to 8 hours", "Connectivity: Bluetooth 5.0, Wi-Fi", "Storage: 32GB internal + cloud", "Compatibility: iOS, Android, Windows", "Weight: 180g", "Water Resistance: IPX4"],
      benefits: ["Enhanced diagnostic accuracy", "Remote patient assessment", "Improved healthcare accessibility", "Comprehensive patient monitoring", "Reduced healthcare costs"],
      icon: <Stethoscope size={44} color="#ffffff" />,
      color: "from-red-500 to-red-600",
    },
    "nanobots-cancer": {
      title: "Nanobots for Cancer Treatment",
      subtitle: "Precision Medicine with Targeted Drug Delivery",
      gallery: [
        "/images/im2.jpeg",
        "/images/im1.jpeg",
        "/images/im3.jpeg",
        "/images/im4.jpeg",
      ],
      description: "Our nanobots represent a breakthrough in cancer treatment, offering precise, targeted drug delivery that minimizes side effects while maximizing therapeutic effectiveness.",
      longDescription: `These microscopic robots are designed to navigate the bloodstream, identify cancer cells with remarkable precision, and deliver therapeutic agents directly to the target site. The nanobots utilize advanced AI algorithms to distinguish between healthy and cancerous cells, ensuring minimal damage to surrounding tissue.`,
      features: ["Precise cancer cell targeting", "Real-time monitoring capabilities", "Programmable drug delivery", "Minimal side effects", "Multiple treatment modalities", "Biodegradable materials", "Advanced imaging compatibility", "Personalized treatment protocols"],
      specifications: ["Size: 50-100 nanometers", "Material: Biodegradable polymers", "Navigation: Magnetic guidance", "Detection: AI-powered recognition", "Payload Capacity: Variable", "Biocompatibility: ISO 10993 certified", "Clearance: Renal excretion"],
      benefits: ["Targeted treatment delivery", "Reduced treatment side effects", "Improved patient outcomes", "Personalized medicine approach", "Enhanced treatment monitoring"],
      icon: <Microscope size={44} color="#ffffff" />,
      color: "from-purple-500 to-purple-600",
    },
    placeholder: {
      title: "Coming Soon",
      subtitle: "Innovation in Development",
      gallery: [
        "/images/placeholder-1.jpg",
        "/images/placeholder-2.jpg",
      ],
      description: "We are working on exciting new products that will further revolutionize healthcare and household automation.",
      longDescription: `Our research and development team is constantly exploring new frontiers in AI and robotics. We're developing cutting-edge solutions that address emerging challenges in healthcare, automation, and beyond.`,
      features: ["Advanced AI algorithms", "Cutting-edge robotics", "Innovative applications", "Industry-leading technology", "Patent-pending solutions"],
      specifications: ["Status: In Development", "Timeline: TBA", "Technology: AI + Robotics", "Applications: Healthcare & Automation", "Innovation Level: Breakthrough"],
      benefits: ["Future-ready solutions", "Industry innovation", "Competitive advantage", "Technology leadership", "Market disruption potential"],
      icon: <Rocket size={44} color="#ffffff" />,
      color: "from-gray-500 to-gray-600",
    },
  };

  const data = productData[id];

  if (!data) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* MODIFIED: Hero Section with Background Image or Video */}
      <div className="relative bg-gray-800 h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Conditional background rendering */}
        {data.backgroundVideo ? (
          <video
            src={data.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-[center_85%] z-0"
          />
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${data.gallery[0]})` }}
          />
        )}
        
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

        <SectionWrapper className="relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className={`w-24 h-24 bg-gradient-to-br ${data.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <span className="text-4xl">{data.icon}</span>
              </div>
              <h1 className="font-geist text-4xl md:text-6xl font-bold mb-4">
                {data.title}
              </h1>
              <p className="font-manrope text-xl md:text-2xl text-white/80 mb-6 max-w-3xl mx-auto">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* Description Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>
            <p className="text-gray-600 leading-relaxed">{data.longDescription}</p>
          </motion.div>
        </div>
      </SectionWrapper>
      
      {/* Carousel Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
            <Carousel 
                showArrows={true} 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false}
                interval={9000}
                className="rounded-2xl"
            >
                {/* === EDITED LOGIC START === */}
                {data.gallery.map((mediaSrc, index) => {
                  const isVideo = mediaSrc.endsWith('.mp4');
                  return (
                    <div key={index} className="h-[900px]">
                      {isVideo ? (
                        <video 
                          src={mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="object-contain h-full w-full"
                        />
                      ) : (
                        <img 
                          src={mediaSrc} 
                          alt={`${data.title} gallery image ${index + 1}`} 
                          className="object-contain h-full w-full" 
                        />
                      )}
                    </div>
                  );
                })}
                {/* === EDITED LOGIC END === */}
            </Carousel>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities that make {data.title} stand out
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className={`w-8 h-8 bg-gradient-to-br ${data.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Specifications & Benefits */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <div className="space-y-4">
              {data.specifications.map((spec, index) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-600 font-medium">{spec.split(":")[0]}:</span>
                  <span className="text-gray-900 font-semibold">{spec.split(":")[1]}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className={`w-6 h-6 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className={`bg-gradient-to-br ${data.color}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience {data.title}?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the revolution in {id === "placeholder" ? "future technology" : "AI-powered solutions"} with our cutting-edge products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@logicboots.com" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100">
              Get in Touch
            </a>
            <Link to="/about" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10">
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default ProductDetail;