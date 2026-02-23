import { motion } from "motion/react";
import { X, Minus, Square } from "lucide-react";
import { ReactNode } from "react";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function RetroWindow({ title, children, onClose, className = "" }: RetroWindowProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] shadow-[2px_2px_0px_rgba(0,0,0,1)] p-1 min-w-[300px] ${className}`}
    >
      {/* Title Bar */}
      <div className="bg-[#000080] flex items-center justify-between px-1 py-0.5 mb-1 cursor-move">
        <span className="text-white font-bold text-xs flex items-center gap-1">
          <div className="w-3 h-3 bg-pink-400 rounded-sm" />
          {title}
        </span>
        <div className="flex gap-0.5">
          <button className="bg-[#c0c0c0] border border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-0.5 hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff]">
            <Minus size={10} />
          </button>
          <button className="bg-[#c0c0c0] border border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-0.5 hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff]">
            <Square size={10} />
          </button>
          <button 
            onClick={onClose}
            className="bg-[#c0c0c0] border border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-0.5 hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff]"
          >
            <X size={10} />
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-white border-2 border-b-[#ffffff] border-r-[#ffffff] border-t-[#808080] border-l-[#808080] p-4 text-sm text-black">
        {children}
      </div>
    </motion.div>
  );
}
