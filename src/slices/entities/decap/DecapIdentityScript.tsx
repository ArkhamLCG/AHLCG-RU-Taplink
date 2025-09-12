import Script from "next/script";

export function DecapIdentityScript() {
  return (
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  );
}
