import React from "react";
import { LogoProps } from "@/interfaces/components";
import Image from "next/image";

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-32 h-12 flex items-center justify-center ${className}`}
    >
      <Image src="/logoIA.png" alt="HuellaID Logo" width={600} height={600} />
    </div>
  );
};

export default Logo;
