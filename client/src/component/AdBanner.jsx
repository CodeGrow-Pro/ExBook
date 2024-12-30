import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    let adsInitialized = false;
    try {
      if (!adsInitialized) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adsInitialized = true;
      }
    } catch (e) {
      console.error('Adsbygoogle error:', e);
    }

    return () => {
      adsInitialized = false; // Reset ads initialization
    };
  }, []);

  return (
    <div style={{ width: "100%", minWidth: '300px', height: '250px' }}>
      <p style={{ color: "white" }}>Ads</p>
      <ins class="adsbygoogle"
        style={{ display: 'block', width: '100%', minWidth: '300px', height: '250px' }}
        data-ad-client="ca-pub-8414862430105960"
        data-ad-slot="2228936492"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
