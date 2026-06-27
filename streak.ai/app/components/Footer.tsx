"use client";

import Image from "next/image";

interface FooterProps {
  onAppStoreClick: () => void;
}

export default function Footer({ onAppStoreClick }: FooterProps) {
  return (
    <footer className="bg-[#F5F5F0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Badges */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/icon.png"
                alt="Streak.ai"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl tracking-tight">
                Streak.ai
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onAppStoreClick}
                className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-medium app-store-btn"
              >
                <svg width="16" height="16" viewBox="0 0 384 512">
                  <defs>
                    <linearGradient
                      id="appleGradFoot"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#appleGradFoot)"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-111.1-59.4-126.5zM231.6 2.7c-22.6 1-45.6 13.7-59.6 32.6-13 17.7-23.5 43.7-19.5 69.5 24.7 2.4 48.8-12.5 62.6-31.2 13.3-18.3 21.1-43.2 16.5-70.9z"
                  />
                </svg>
                App Store
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.streakup.ai&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-medium app-store-btn"
              >
                <svg width="16" height="16" viewBox="0 0 512 512">
                  <defs>
                    <linearGradient
                      id="gFoot1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00A0E4" />
                      <stop offset="100%" stopColor="#0079CA" />
                    </linearGradient>
                    <linearGradient
                      id="gFoot2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00F076" />
                      <stop offset="100%" stopColor="#04C965" />
                    </linearGradient>
                    <linearGradient
                      id="gFoot3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FF3A44" />
                      <stop offset="100%" stopColor="#E11732" />
                    </linearGradient>
                    <linearGradient
                      id="gFoot4"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFE000" />
                      <stop offset="100%" stopColor="#FFB300" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
                    fill="url(#gFoot1)"
                  />
                  <path
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                    fill="url(#gFoot3)"
                  />
                  <path
                    d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    fill="url(#gFoot2)"
                  />
                  <path
                    d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
                    fill="url(#gFoot4)"
                  />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-charcoal transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-charcoal transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:velocatstudios@gmail.com"
                  className="text-sm text-gray-600 hover:text-charcoal transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/share/g/1DtN3pXcsz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-charcoal transition-colors"
                >
                  Join our FB Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © Copyright 2026, All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61590953841303"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-charcoal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/streak.aii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-charcoal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="mailto:velocatstudios@gmail.com"
              className="social-icon text-gray-600 hover:text-charcoal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
