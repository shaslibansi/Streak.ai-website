"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ComingSoonSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonSidebar({
  isOpen,
  onClose,
}: ComingSoonSidebarProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 w-[380px] max-w-[90vw] h-full bg-white shadow-2xl z-[101] p-8 flex flex-col animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <Image
            src="/images/icon.png"
            alt="Streak.ai"
            width={80}
            height={80}
            className="w-20 h-20 mb-6"
          />
          <h3 className="text-2xl font-extrabold mb-2">Coming Soon</h3>
          <p className="text-gray-500 text-sm">
            The App Store version is on its way. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
}
