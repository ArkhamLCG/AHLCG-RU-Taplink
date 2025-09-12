import Script from "next/script";

export function DecapAdminScript() {
  return <Script src={process.env.NEXT_PUBLIC_DECAP_ADMIN_SCRIPT} />;
}
