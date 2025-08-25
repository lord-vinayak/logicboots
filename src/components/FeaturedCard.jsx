import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ id, title, description, tagline, color, icon }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer"
    >
      <Link to={`/featured/${id}`}>
        <div className={`card h-full bg-gradient-to-br ${color} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{icon}</span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-geist text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                {title}
              </h3>
              
              <p className="font-manrope text-white/80 text-sm leading-relaxed mb-3 group-hover:text-white/90 transition-colors">
                {description}
              </p>
              
              <div className="font-manrope inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-medium">
                {tagline}
              </div>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedCard;
