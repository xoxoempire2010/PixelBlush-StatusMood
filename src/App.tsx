import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Music, MessageCircle, Star, Send, Bell } from 'lucide-react';
import RetroWindow from './components/RetroWindow';
import GlitterBanner from './components/GlitterBanner';
import MouseTrail from './components/MouseTrail';

const FRIENDS = [
  { id: 1, name: 'Tom', img: 'https://picsum.photos/seed/tom/100/100' },
  { id: 2, name: 'Stacy', img: 'https://picsum.photos/seed/stacy/100/100' },
  { id: 3, name: 'Sk8rBoi', img: 'https://picsum.photos/seed/sk8/100/100' },
  { id: 4, name: 'SceneQueen', img: 'https://picsum.photos/seed/scene/100/100' },
  { id: 5, name: 'PixelPals', img: 'https://picsum.photos/seed/pixel/100/100' },
  { id: 6, name: 'GothGurl', img: 'https://picsum.photos/seed/goth/100/100' },
  { id: 7, name: 'NeonNights', img: 'https://picsum.photos/seed/neon/100/100' },
  { id: 8, name: 'RetroRaver', img: 'https://picsum.photos/seed/rave/100/100' },
];

export default function App() {
  const [status, setStatus] = useState("Listening to: My Chemical Romance - Helena");
  const [isNudging, setIsNudging] = useState(false);
  const [alerts, setAlerts] = useState<{ id: number; text: string }[]>([]);
  const [showTop8, setShowTop8] = useState(true);

  const triggerNudge = useCallback(() => {
    setIsNudging(true);
    // Play a fake nudge sound effect if we had one
    setTimeout(() => setIsNudging(false), 500);
  }, []);

  const addAlert = (text: string) => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, text }]);
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(a => a.id !== id));
    }, 5000);
  };

  useEffect(() => {
    // Randomly trigger "nudges" or alerts for that authentic feel
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        addAlert("Someone just signed in!");
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen pixel-cursor relative overflow-hidden ${isNudging ? 'nudge-shake' : ''}`}>
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--color-pastel-blue)_0%,_transparent_70%)] opacity-50 pointer-events-none" />
      <div className="vhs-overlay" />
      <div className="scanline" />
      
      <MouseTrail />

      {/* Header */}
      <header className="relative z-10">
        <GlitterBanner />
        <div className="p-4 flex justify-between items-center bg-white/30 backdrop-blur-sm border-b border-white/50">
          <h1 className="text-4xl font-bold italic text-pink-500 drop-shadow-[2px_2px_0px_#fff]">
            PixelBlush
          </h1>
          <div className="flex gap-4">
            <button 
              onClick={triggerNudge}
              className="bg-blue-500 text-white px-3 py-1 text-xs border-2 border-t-blue-300 border-l-blue-300 border-b-blue-800 border-r-blue-800 active:border-t-blue-800 active:border-l-blue-800 active:border-b-blue-300 active:border-r-blue-300 flex items-center gap-1"
            >
              <Bell size={14} /> NUDGE!
            </button>
          </div>
        </div>
      </header>

      <main className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 max-w-7xl mx-auto">
        
        {/* Left Column: Profile & Status */}
        <div className="md:col-span-4 space-y-8">
          <RetroWindow title="User Profile">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 border-4 border-pink-300 p-1 bg-white mb-4">
                <img 
                  src="https://picsum.photos/seed/me/200/200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-bold text-blue-800 underline mb-2">~* xX_Pixel_Princess_Xx *~</h2>
              <p className="text-xs text-gray-600 mb-4">"Mood: Sparkly ✨"</p>
              
              <div className="w-full bg-[#f0f0f0] border border-gray-400 p-2 text-left">
                <div className="flex items-center gap-2 text-xs font-bold mb-1">
                  <Music size={12} className="text-pink-500" /> Current Status:
                </div>
                <input 
                  type="text" 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-white border border-gray-400 p-1 text-xs focus:outline-none"
                />
              </div>
            </div>
          </RetroWindow>

          <RetroWindow title="Music Player">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center text-pink-500 animate-pulse">
                <Music size={24} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-gray-500 uppercase">Now Playing</div>
                <div className="text-xs font-bold truncate">Helena - My Chemical Romance</div>
                <div className="w-full bg-gray-300 h-1 mt-1">
                  <div className="bg-pink-500 h-full w-2/3" />
                </div>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Middle Column: Blog/Feed */}
        <div className="md:col-span-5 space-y-8">
          <RetroWindow title="My Journal">
            <div className="space-y-4">
              <div className="border-b border-dashed border-gray-300 pb-2">
                <div className="text-[10px] text-gray-400">Feb 23, 2026 @ 04:13 AM</div>
                <h3 className="font-bold text-pink-600">Oversized Hoodies & Glitter Pens</h3>
                <p className="text-xs mt-1">
                  omg i just spent like 3 hours customizing my layout... do u guys like the glitter? 
                  i think it looks so cool. also tom is being so annoying today lol. 
                  anyway, ttyl! <span className="text-pink-500">{"<3"}</span>
                </p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-2">
                <div className="text-[10px] text-gray-400">Feb 22, 2026 @ 11:45 PM</div>
                <h3 className="font-bold text-blue-600">New Layout!</h3>
                <p className="text-xs mt-1">
                  welcme to my new page!! hope u like it. leave a comment or ill delete u from my top 8!!! 
                  jk... or am i? 😈
                </p>
              </div>
            </div>
          </RetroWindow>

          <RetroWindow title="Instant Message">
            <div className="h-48 bg-white border border-gray-400 mb-2 overflow-y-auto p-2 space-y-2">
              <div className="text-xs"><span className="text-blue-600 font-bold">Tom:</span> hey u there?</div>
              <div className="text-xs"><span className="text-pink-600 font-bold">Me:</span> ya whats up</div>
              <div className="text-xs"><span className="text-blue-600 font-bold">Tom:</span> did u see stacys new pic?</div>
              <div className="text-xs"><span className="text-pink-600 font-bold">Me:</span> omg no let me look</div>
            </div>
            <div className="flex gap-1">
              <input type="text" className="flex-1 border border-gray-400 text-xs p-1" placeholder="Type a message..." />
              <button className="bg-[#c0c0c0] border border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-1">
                <Send size={12} />
              </button>
            </div>
          </RetroWindow>
        </div>

        {/* Right Column: Top 8 */}
        <div className="md:col-span-3">
          <AnimatePresence>
            {showTop8 && (
              <RetroWindow title="Top 8 Friends" onClose={() => setShowTop8(false)}>
                <div className="grid grid-cols-2 gap-2">
                  {FRIENDS.map(friend => (
                    <div key={friend.id} className="flex flex-col items-center group">
                      <div className="relative">
                        <img 
                          src={friend.img} 
                          alt={friend.name} 
                          className="w-16 h-16 border-2 border-white shadow-sm group-hover:border-pink-400 transition-colors"
                          referrerPolicy="no-referrer"
                        />
                        <Heart 
                          size={12} 
                          className="absolute -top-1 -right-1 text-pink-500 fill-pink-500 drop-shadow-sm" 
                        />
                      </div>
                      <span className="text-[10px] font-bold mt-1 text-blue-800 truncate w-full text-center group-hover:underline">
                        {friend.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-2 border-t border-gray-200 text-center">
                  <button className="text-[10px] text-pink-500 font-bold hover:underline">View All Friends (142)</button>
                </div>
              </RetroWindow>
            )}
          </AnimatePresence>

          <div className="mt-8">
            <RetroWindow title="Bling Box">
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="p-1 bg-pink-100 border border-pink-300 text-[10px] flex items-center gap-1">
                  <Star size={10} className="text-yellow-500 fill-yellow-500" /> VIP
                </div>
                <div className="p-1 bg-blue-100 border border-blue-300 text-[10px] flex items-center gap-1">
                  <MessageCircle size={10} className="text-blue-500" /> Chatty
                </div>
                <div className="p-1 bg-purple-100 border border-purple-300 text-[10px] flex items-center gap-1">
                  <Heart size={10} className="text-red-500 fill-red-500" /> Loved
                </div>
              </div>
            </RetroWindow>
          </div>
        </div>
      </main>

      {/* Floating Alerts */}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        <AnimatePresence>
          {alerts.map(alert => (
            <motion.div
              key={alert.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="bg-[#ffffcc] border-2 border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-3 shadow-md flex items-center gap-3 min-w-[200px]"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <MessageCircle size={16} />
              </div>
              <div className="text-xs">
                <div className="font-bold text-blue-800">System Alert</div>
                <div>{alert.text}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-12 p-8 bg-black/80 text-white text-center relative z-10 border-t-4 border-pink-500">
        <div className="glitter-text text-xl font-bold mb-2">~* Thanks for visiting *~</div>
        <p className="text-[10px] opacity-50">© 2004-2026 PixelBlush Entertainment. All rights reserved. Best viewed in Internet Explorer 6.0</p>
      </footer>
    </div>
  );
}
