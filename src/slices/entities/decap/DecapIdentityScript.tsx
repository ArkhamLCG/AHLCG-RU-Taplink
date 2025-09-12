import Script from "next/script";

export function DecapIdentityScript() {
  return <Script src={process.env.NEXT_PUBLIC_DECAP_IDENTITY_SCRIPT} />;
}
