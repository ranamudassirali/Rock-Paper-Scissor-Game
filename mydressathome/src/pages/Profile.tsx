import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Heart, History } from 'lucide-react';

const Profile: React.FC = () => {
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
            My Profile
          </h1>
          <p className="text-xl text-white/80">
            Manage your account settings and fashion preferences
          </p>
        </motion.div>

        <div className="glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <User className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Account Settings
              </h3>
              <p className="text-white/70">
                Update your personal information and preferences
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Favorites
              </h3>
              <p className="text-white/70">
                View your liked outfits and saved items
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;