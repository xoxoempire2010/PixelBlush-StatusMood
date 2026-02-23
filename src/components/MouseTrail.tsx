import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ['#ffb7c5', '#b4e1ff', '#e0b3ff', '#fffacd', '#ffffff'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setParticles(prev => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10001]">
      {particles.map((p, i) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 rounded-full blur-[1px] animate-fade-out"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            opacity: 1 - (particles.length - i) / particles.length,
            transform: `scale(${1 - (particles.length - i) / particles.length})`
          }}
        />
      ))}
      <style>{`
        @keyframes fade-out {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0); }
        }
        .animate-fade-out {
          animation: fade-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
}
