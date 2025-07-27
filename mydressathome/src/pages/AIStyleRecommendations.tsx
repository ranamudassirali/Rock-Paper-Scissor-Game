import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Shuffle, 
  Filter, 
  TrendingUp,
  Palette,
  Sun,
  Cloud,
  Snowflake,
  Calendar,
  Star,
  ChevronDown,
  RefreshCw
} from 'lucide-react';

interface StylePreference {
  id: string;
  name: string;
  selected: boolean;
}

interface OutfitRecommendation {
  id: string;
  name: string;
  style: string;
  occasion: string;
  season: string;
  confidence: number;
  items: string[];
  colors: string[];
  price: number;
  liked: boolean;
}

const AIStyleRecommendations: React.FC = () => {
  const [preferences, setPreferences] = useState<StylePreference[]>([
    { id: '1', name: 'Casual', selected: true },
    { id: '2', name: 'Formal', selected: false },
    { id: '3', name: 'Bohemian', selected: false },
    { id: '4', name: 'Minimalist', selected: true },
    { id: '5', name: 'Vintage', selected: false },
    { id: '6', name: 'Sporty', selected: false },
    { id: '7', name: 'Elegant', selected: true },
    { id: '8', name: 'Streetwear', selected: false }
  ]);

  const [selectedOccasion, setSelectedOccasion] = useState('work');
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [recommendations, setRecommendations] = useState<OutfitRecommendation[]>([
    {
      id: '1',
      name: 'Professional Chic',
      style: 'Minimalist',
      occasion: 'work',
      season: 'spring',
      confidence: 95,
      items: ['Blazer', 'Trousers', 'Blouse', 'Heels'],
      colors: ['Navy', 'White', 'Beige'],
      price: 280,
      liked: false
    },
    {
      id: '2',
      name: 'Casual Friday',
      style: 'Casual',
      occasion: 'work',
      season: 'spring',
      confidence: 88,
      items: ['Cardigan', 'Jeans', 'Sneakers', 'T-shirt'],
      colors: ['Gray', 'Blue', 'White'],
      price: 150,
      liked: true
    },
    {
      id: '3',
      name: 'Evening Elegance',
      style: 'Elegant',
      occasion: 'dinner',
      season: 'spring',
      confidence: 92,
      items: ['Dress', 'Heels', 'Clutch', 'Jewelry'],
      colors: ['Black', 'Gold'],
      price: 320,
      liked: false
    }
  ]);

  const occasions = [
    { value: 'work', label: 'Work', icon: '💼' },
    { value: 'casual', label: 'Casual', icon: '👕' },
    { value: 'dinner', label: 'Dinner', icon: '🍽️' },
    { value: 'party', label: 'Party', icon: '🎉' },
    { value: 'date', label: 'Date', icon: '💕' },
    { value: 'travel', label: 'Travel', icon: '✈️' }
  ];

  const seasons = [
    { value: 'spring', label: 'Spring', icon: Sun },
    { value: 'summer', label: 'Summer', icon: Sun },
    { value: 'fall', label: 'Fall', icon: Cloud },
    { value: 'winter', label: 'Winter', icon: Snowflake }
  ];

  const togglePreference = (id: string) => {
    setPreferences(prev => 
      prev.map(pref => 
        pref.id === id ? { ...pref, selected: !pref.selected } : pref
      )
    );
  };

  const toggleLike = (id: string) => {
    setRecommendations(prev =>
      prev.map(rec =>
        rec.id === id ? { ...rec, liked: !rec.liked } : rec
      )
    );
  };

  const generateRecommendations = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      // In a real app, this would call your AI recommendation API
    }, 2000);
  };

  const getSeasonIcon = (season: string) => {
    const seasonData = seasons.find(s => s.value === season);
    return seasonData ? seasonData.icon : Sun;
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            AI Style Recommendations
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get personalized outfit suggestions powered by machine learning algorithms
            that understand your style preferences and current fashion trends.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Preferences & Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Style Preferences */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Style Preferences
              </h3>
              
              <div className="space-y-3">
                {preferences.map((pref) => (
                  <label
                    key={pref.id}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={pref.selected}
                      onChange={() => togglePreference(pref.id)}
                      className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500"
                    />
                    <span className="text-white group-hover:text-pink-300 transition-colors duration-200">
                      {pref.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasion Filter */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Occasion
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                {occasions.map((occasion) => (
                  <button
                    key={occasion.value}
                    onClick={() => setSelectedOccasion(occasion.value)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedOccasion === occasion.value
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-lg mb-1">{occasion.icon}</div>
                    {occasion.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Sun className="w-5 h-5 mr-2" />
                Season
              </h3>
              
              <div className="space-y-2">
                {seasons.map((season) => {
                  const Icon = season.icon;
                  return (
                    <button
                      key={season.value}
                      onClick={() => setSelectedSeason(season.value)}
                      className={`w-full p-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center space-x-3 ${
                        selectedSeason === season.value
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{season.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateRecommendations}
              disabled={isGenerating}
              className="w-full btn-primary py-4 rounded-xl text-white font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              <span>{isGenerating ? 'Generating...' : 'Get New Recommendations'}</span>
            </button>
          </motion.div>

          {/* Recommendations Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* AI Insights */}
            <div className="glass p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                AI Fashion Insights
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Style Match</h4>
                  <p className="text-white/70 text-sm">92% compatibility with your preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Trend Score</h4>
                  <p className="text-white/70 text-sm">Currently trending in your area</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Confidence</h4>
                  <p className="text-white/70 text-sm">High recommendation accuracy</p>
                </div>
              </div>
            </div>

            {/* Recommendations List */}
            <div className="space-y-6">
              {recommendations.map((rec, index) => {
                const SeasonIcon = getSeasonIcon(rec.season);
                return (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {rec.name}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-white/70">
                          <span className="flex items-center space-x-1">
                            <Palette className="w-4 h-4" />
                            <span>{rec.style}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="capitalize">{rec.occasion}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <SeasonIcon className="w-4 h-4" />
                            <span className="capitalize">{rec.season}</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm text-white/70">AI Confidence</div>
                          <div className="text-lg font-bold text-green-400">
                            {rec.confidence}%
                          </div>
                        </div>
                        <button
                          onClick={() => toggleLike(rec.id)}
                          className={`p-2 rounded-lg transition-colors duration-300 ${
                            rec.liked 
                              ? 'bg-pink-500 text-white' 
                              : 'bg-white/10 text-white/60 hover:bg-white/20'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${rec.liked ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-white font-medium mb-3">Outfit Items</h5>
                        <div className="flex flex-wrap gap-2">
                          {rec.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-white font-medium mb-3">Color Palette</h5>
                        <div className="flex items-center space-x-3">
                          {rec.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className="text-center">
                              <div 
                                className="w-8 h-8 rounded-full border-2 border-white/30 mb-1"
                                style={{ backgroundColor: color.toLowerCase() }}
                              />
                              <span className="text-xs text-white/70">{color}</span>
                            </div>
                          ))}
                          <div className="text-sm text-white/70 ml-2">
                            Est. ${rec.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium transition-colors duration-300">
                          Try Virtual Fit
                        </button>
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors duration-300">
                          Save to Wardrobe
                        </button>
                      </div>
                      
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-300">
                        <Shuffle className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIStyleRecommendations;