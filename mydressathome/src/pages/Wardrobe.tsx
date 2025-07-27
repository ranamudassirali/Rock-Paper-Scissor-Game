import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shirt, 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Heart,
  Edit,
  Trash2,
  Tag
} from 'lucide-react';

interface WardrobeItem {
  id: string;
  name: string;
  category: string;
  color: string;
  brand: string;
  price: number;
  favorite: boolean;
  image: string;
}

const Wardrobe: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const wardrobeItems: WardrobeItem[] = [
    {
      id: '1',
      name: 'Classic White Shirt',
      category: 'shirts',
      color: 'white',
      brand: 'Zara',
      price: 45,
      favorite: true,
      image: '/api/placeholder/200/250'
    },
    {
      id: '2',
      name: 'Blue Denim Jeans',
      category: 'pants',
      color: 'blue',
      brand: 'Levi\'s',
      price: 89,
      favorite: false,
      image: '/api/placeholder/200/250'
    },
    {
      id: '3',
      name: 'Summer Dress',
      category: 'dresses',
      color: 'floral',
      brand: 'H&M',
      price: 35,
      favorite: true,
      image: '/api/placeholder/200/250'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Items', count: wardrobeItems.length },
    { value: 'shirts', label: 'Shirts', count: 1 },
    { value: 'pants', label: 'Pants', count: 1 },
    { value: 'dresses', label: 'Dresses', count: 1 },
    { value: 'shoes', label: 'Shoes', count: 0 },
    { value: 'accessories', label: 'Accessories', count: 0 }
  ];

  const filteredItems = wardrobeItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            My Digital Wardrobe
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Organize your clothing collection, create outfits, and track your fashion investments
            all in one smart digital wardrobe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Add Item Button */}
            <button className="w-full btn-primary py-4 rounded-xl text-white font-semibold flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add New Item</span>
            </button>

            {/* Categories */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-300 flex items-center justify-between ${
                      selectedCategory === category.value
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className="text-sm opacity-70">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Wardrobe Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Total Items:</span>
                  <span className="font-semibold">{wardrobeItems.length}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Favorites:</span>
                  <span className="font-semibold">{wardrobeItems.filter(item => item.favorite).length}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Total Value:</span>
                  <span className="font-semibold">${wardrobeItems.reduce((sum, item) => sum + item.price, 0)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Search and Controls */}
            <div className="glass p-6 rounded-2xl mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search your wardrobe..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors duration-300">
                    <Filter className="w-5 h-5" />
                  </button>
                  
                  <div className="flex bg-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className={`glass rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`${viewMode === 'list' ? 'w-32 h-32' : 'aspect-[3/4]'} bg-white/10 relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shirt className="w-12 h-12 text-white/40" />
                    </div>
                    <button
                      className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-300 ${
                        item.favorite 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-black/20 text-white/60 hover:bg-pink-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${item.favorite ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className={`p-4 flex-1 ${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h4 className="text-white font-semibold mb-1">{item.name}</h4>
                      <p className="text-white/60 text-sm mb-2 capitalize">
                        {item.category} • {item.color}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/80 text-sm">{item.brand}</span>
                        <span className="text-pink-400 font-semibold">${item.price}</span>
                      </div>
                    </div>

                    <div className={`flex gap-2 ${viewMode === 'list' ? 'ml-4' : ''}`}>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-colors duration-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-300">
                        <Tag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Shirt className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No items found</h3>
                <p className="text-white/60">Try adjusting your search or filters</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;