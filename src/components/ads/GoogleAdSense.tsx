"use client";

import { useEffect } from "react";

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  adStyle?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function GoogleAdSense({
  adSlot,
  adFormat = "auto",
  adStyle = { display: "block" },
  className = "",
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      if (window.adsbygoogle && process.env.NODE_ENV === "production") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  // Only show ads in production
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className={`bg-gray-200 p-4 text-center text-gray-500 ${className}`}>
        <p>Google AdSense Ad Placeholder</p>
        <p className="text-xs">Slot: {adSlot}</p>
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={adStyle}
      data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}