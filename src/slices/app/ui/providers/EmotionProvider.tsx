"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

export function EmotionProvider({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  const emotionKey = `${cache.key} ${Object.keys(cache.inserted).join(" ")}`;
  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={emotionKey}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Emotion CSS injection
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
