"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cek apakah user udah pernah nge-klik accept sebelumnya
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true); // Kalau belum, munculin bannernya
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Decline biasanya tetep nutup banner, tapi nggak nyimpen 'true'
    sessionStorage.setItem("cookie-consent", "declined"); 
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm p-6 bg-card border border-border rounded-xl shadow-2xl z-50">
      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
        🍪 Cookie Preferences
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        We use cookies to analyze website traffic and optimize your experience as an operations professional visiting this space.
      </p>
      <div className="flex gap-3">
        <button
          onClick={acceptCookies}
          className="flex-1 bg-foreground text-background py-2 px-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="flex-1 border border-border bg-background text-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-accent transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}