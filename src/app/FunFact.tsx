import { useState } from "react";

export default function FunFact({ fact, emoji }: { fact: string; emoji: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block cursor-pointer group" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-2xl">{emoji}</span>
      {isHovered && (
        <div className="absolute bottom-full mb-2 w-max rounded-md bg-gray-800 text-white p-2 text-sm shadow-lg">
          {fact}
        </div>
      )}
    </div>
  );
}
