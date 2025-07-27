import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Upload, 
  Zap, 
  Settings, 
  Download, 
  Share2, 
  RotateCcw,
  Play,
  Square,
  Loader
} from 'lucide-react';

interface ClothingItem {
  id: string;
  name: string;
  category: 'shirt' | 'dress' | 'pants' | 'jacket';
  image: string;
  color: string;
}

const VirtualTryOn: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedClothing, setSelectedClothing] = useState<ClothingItem | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sample clothing items for demo
  const clothingItems: ClothingItem[] = [
    {
      id: '1',
      name: 'Classic White Shirt',
      category: 'shirt',
      image: '/api/placeholder/150/200',
      color: 'white'
    },
    {
      id: '2',
      name: 'Summer Dress',
      category: 'dress',
      image: '/api/placeholder/150/200',
      color: 'blue'
    },
    {
      id: '3',
      name: 'Denim Jacket',
      category: 'jacket',
      image: '/api/placeholder/150/200',
      color: 'blue'
    },
    {
      id: '4',
      name: 'Black Pants',
      category: 'pants',
      image: '/api/placeholder/150/200',
      color: 'black'
    }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const processVirtualTryOn = async () => {
    if (!selectedClothing || !cameraActive) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would integrate with actual AI models like TensorFlow.js or MediaPipe
    }, 3000);
  };

  const handleClothingSelect = (item: ClothingItem) => {
    setSelectedClothing(item);
    if (cameraActive) {
      processVirtualTryOn();
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

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
            AI Virtual Try-On
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience clothes on yourself using advanced AI technology. 
            Select an item and see how it looks in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Clothing Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Select Clothing
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {clothingItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClothingSelect(item)}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedClothing?.id === item.id
                        ? 'border-pink-500 shadow-lg shadow-pink-500/25'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-white/10 flex items-center justify-center">
                      <span className="text-white/60 text-sm">
                        {item.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-white font-medium text-sm mb-1">
                        {item.name}
                      </h4>
                      <p className="text-white/60 text-xs capitalize">
                        {item.color} {item.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 px-4 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload Your Own</span>
              </button>
            </div>

            {/* Settings Panel */}
            <div className="glass p-6 rounded-2xl">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="w-full flex items-center justify-between text-white font-medium mb-4"
              >
                <span className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Try-On Settings
                </span>
                <motion.div
                  animate={{ rotate: showSettings ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ⌄
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: showSettings ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Fit Adjustment
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Lighting
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="70"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Opacity
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="85"
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Camera/Try-On Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Virtual Try-On Studio
                </h3>
                
                <div className="flex space-x-2">
                  <button
                    onClick={cameraActive ? stopCamera : startCamera}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2 ${
                      cameraActive
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {cameraActive ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{cameraActive ? 'Stop' : 'Start'}</span>
                  </button>
                </div>
              </div>

              {/* Camera Feed */}
              <div className="relative aspect-[4/3] bg-black/20 rounded-xl overflow-hidden mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover camera-preview"
                />
                
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full virtual-overlay"
                />

                {!cameraActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-white/40 mx-auto mb-4" />
                      <p className="text-white/60">Click "Start" to begin virtual try-on</p>
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center">
                      <Loader className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
                      <p className="text-white">AI Processing...</p>
                    </div>
                  </div>
                )}

                {selectedClothing && cameraActive && !isProcessing && (
                  <div className="absolute top-4 left-4 glass px-3 py-2 rounded-lg">
                    <p className="text-white text-sm font-medium">
                      Trying on: {selectedClothing.name}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={processVirtualTryOn}
                  disabled={!selectedClothing || !cameraActive || isProcessing}
                  className="btn-primary px-6 py-3 rounded-xl text-white font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Zap className="w-5 h-5" />
                  <span>Apply AI Try-On</span>
                </button>
                
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors duration-300 flex items-center space-x-2">
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
                
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors duration-300 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Save</span>
                </button>
                
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors duration-300 flex items-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Processing Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 glass p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            How Our AI Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-white font-medium mb-2">Pose Detection</h4>
              <p className="text-white/70 text-sm">
                AI identifies your body pose and key points for accurate clothing placement
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-white font-medium mb-2">Garment Mapping</h4>
              <p className="text-white/70 text-sm">
                Advanced algorithms map clothing to your body shape and movements
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-white font-medium mb-2">Real-time Rendering</h4>
              <p className="text-white/70 text-sm">
                Realistic lighting and shadows create a natural virtual try-on experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualTryOn;