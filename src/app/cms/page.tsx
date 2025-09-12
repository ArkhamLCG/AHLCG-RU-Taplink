"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CMSPage() {
  useEffect(() => {
    // Инициализируем CMS после загрузки скриптов
    if (typeof window !== "undefined" && window.CMS) {
      window.CMS.init();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Script src="/admin/ru.js" strategy="beforeInteractive" />
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          AHLCG RU Taplink - Управление контентом
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div id="nc-root"></div>
        </div>
      </div>
    </div>
  );
}
