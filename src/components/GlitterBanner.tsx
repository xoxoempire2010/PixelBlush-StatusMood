export default function GlitterBanner() {
  return (
    <div className="w-full h-12 bg-black overflow-hidden relative border-y-2 border-pink-400 flex items-center">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-bold px-4 glitter-text uppercase tracking-widest">
            ✨ PixelBlush StatusMood ✨ Welcome to my world ✨ xoxo ✨ 2004 Vibes ✨
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
