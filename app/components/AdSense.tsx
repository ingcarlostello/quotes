import Script from 'next/script';

const AdSense = () => {
    return (
        <Script
            async 
            crossOrigin='anonymous'         
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            strategy='afterInteractive'
        />
    );
};

export default AdSense;