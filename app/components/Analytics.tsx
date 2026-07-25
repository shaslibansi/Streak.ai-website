"use client";

import { useEffect } from "react";
import { initFirebaseAnalytics, trackEvent } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    const initialize = async () => {
      await initFirebaseAnalytics();
      await trackEvent("page_view", {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    initialize();
  }, []);

  return null;
}
