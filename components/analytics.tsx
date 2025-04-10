'use client';

import Script from 'next/script';

export default function Analytics() {
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!umamiScriptUrl || !umamiWebsiteId) {
    return null;
  }

  return <Script async src={umamiScriptUrl} data-website-id={umamiWebsiteId} strategy="afterInteractive" data-domains="porto-gian.vercel.app" />;
}
