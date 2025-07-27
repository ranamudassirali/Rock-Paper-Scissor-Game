import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Sparkles, 
  Shirt, 
  Ruler, 
  Brain, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  Play
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'AI Virtual Try-On',
      description: 'Try on clothes virtually using advanced AI and computer vision technology',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Sparkles,
      title: 'Smart Style Recommendations',
      description: 'Get personalized fashion recommendations based on your style preferences',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match outfits based on color, style, and occasion',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Ruler,
      title: 'Smart Size Guide',
      description: 'AI-assisted size recommendations for perfect fit every time',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing for instant virtual try-on results',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your photos and data are processed securely and never stored',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '10K+', label: 'Clothing Items' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Assistance' }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Try On Clothes
            <span className="block gradient-text">Virtually at Home</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
          >
            Experience the future of fashion with AI-powered virtual try-on technology.
            See how clothes look on you before you buy, all from the comfort of your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/virtual-tryon"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 shadow-lg"
            >
              <Camera className="w-5 h-5" />
              <span>Start Virtual Try-On</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="flex items-center space-x-2 px-6 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center glass p-6 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our cutting-edge artificial intelligence technology brings you the most realistic
              virtual try-on experience with features designed for the modern shopper.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-2xl group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <Users className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Join Thousands of Fashion Enthusiasts
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Start your virtual fashion journey today and discover how AI can transform
              your shopping experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/virtual-tryon"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2"
              >
                <Camera className="w-5 h-5" />
                <span>Try Virtual Dressing</span>
              </Link>
              <Link
                to="/ai-recommendations"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Style Tips</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;