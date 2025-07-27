import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Brain, Camera, Calculator } from 'lucide-react';

const SizeGuide: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            AI Size Guide
          </h1>
          <p className="text-xl text-white/80">
            Get accurate size recommendations using AI and computer vision
          </p>
        </motion.div>

        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Camera className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Body Measurement
              </h3>
              <p className="text-white/70">
                Use your camera to get accurate body measurements
              </p>
            </div>
            <div className="text-center">
              <Brain className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Size Prediction
              </h3>
              <p className="text-white/70">
                AI predicts your perfect size across different brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;