import { useEffect } from 'react';

const AppRedirect = () => {

  useEffect(() => {
    const detectPlatformAndRedirect = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      // Check for iOS devices
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      
      // Check for Android devices
      const isAndroid = /android/i.test(userAgent);
      
      if (isIOS) {
        // Redirect to App Store
        window.location.href = 'https://apps.apple.com/us/app/think-rush-quiz-rivals/id6746662154';
      } else if (isAndroid) {
        // Redirect to Google Play Store
        window.location.href = 'https://play.google.com/store/apps/details?id=org.rgsoft.thinkrush&hl=en';
      } else {
        // Fallback to thinkrush.rgsoft.org
        window.location.href = 'https://thinkrush.rgsoft.org';
      }
    };

    detectPlatformAndRedirect();
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <p>Redirecting to app store...</p>
      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        If you are not redirected, please wait a moment.
      </div>
    </div>
  );
};

export default AppRedirect;

