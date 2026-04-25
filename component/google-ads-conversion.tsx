import Script from "next/script";

export default function GoogleAdsConversion() {
  return (
    <Script id="google-ads-conversion-skin-hair" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', {'send_to': 'AW-18095694782/EEjICIu8rqIcEL7H2bRD'});
      `}
    </Script>
  );
}
