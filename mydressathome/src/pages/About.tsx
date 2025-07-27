import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Powered by cutting-edge machine learning algorithms for accurate virtual try-on experiences'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing ensures smooth and responsive virtual dressing experiences'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your photos and personal data are processed securely and never stored on our servers'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of fashion enthusiasts sharing styles and recommendations'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for innovation in fashion technology and user experience design'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Available worldwide with support for multiple languages and currencies'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            About MyDressAtHome
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the fashion industry with AI-powered virtual try-on technology.
            Our mission is to make online shopping more personal, sustainable, and enjoyable for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            The Future of Fashion is Here
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            MyDressAtHome represents the next generation of fashion technology, combining artificial intelligence,
            computer vision, and user experience design to create the most realistic virtual try-on experience possible.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-white/70">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-white/70">AI Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;