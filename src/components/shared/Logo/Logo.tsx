import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3ZM7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14ZM2 17C2 14.2386 4.23858 12 7 12C9.76142 12 12 14.2386 12 17C12 19.7614 9.76142 22 7 22C4.23858 22 2 19.7614 2 17Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14ZM12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17Z"
        />
      </svg>
      <span className="font-bold text-xl">HuellaID</span>
    </div>
  );
};

export default Logo;
