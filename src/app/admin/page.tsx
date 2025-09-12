"use client";

import { DecapAdminScript } from "@/slices/entities/decap";

export default function AdminPage() {
  return (
    <div>
      <DecapAdminScript />
      <div id="nc-root"></div>
    </div>
  );
}
