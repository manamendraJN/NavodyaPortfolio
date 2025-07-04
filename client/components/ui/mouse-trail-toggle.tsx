import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface MouseTrailToggleProps {
  isMouseTrailEnabled: boolean;
  toggleMouseTrail: () => void;
}

export function MouseTrailToggle({ isMouseTrailEnabled, toggleMouseTrail }: MouseTrailToggleProps) {
  return (
    <motion.button
      onClick={toggleMouseTrail}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-[hsl(213,50%,16%)] dark:text-gray-300 hover:bg-[hsl(172,85%,35%)]/10 dark:hover:bg-[hsl(172,85%,45%)]/10 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Sparkles size={16} />
      <span>Mouse Trail {isMouseTrailEnabled ? "On" : "Off"}</span>
    </motion.button>
  );
}