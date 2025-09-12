import { useEffect } from "react";

export function useDecapAdmin() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="decap-cms"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
}
