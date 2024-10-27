import { useEffect, useState } from 'react';
import './App.css';
import { Cookie } from './Components/Cookie/Cookie';
import Cookies from 'js-cookie';
import { ManageCookies } from './Components/ManageCookies/ManageCookies';
import clsx from 'clsx';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showManageCookies, setShowManageCookies] = useState(false);

  useEffect(() => {
    const hasConsent =
      !!Cookies.get('essentials-cookies') ||
      !!Cookies.get('analytics-cookies') ||
      !!Cookies.get('marketing-cookies');
    setShowCookieBanner(!hasConsent);
  }, []);

  function handleAllowCookies() {
    Cookies.set('essentials-cookies', 'userid_123');
    Cookies.set('analytics-cookies', 'userid_123');
    Cookies.set('marketing-cookies', 'userid_123');
    setShowCookieBanner(false);
    setShowManageCookies(false);
  }

  function handleDeclineCookies() {
    Cookies.set('essentials-cookies', 'userid_123');
    setShowCookieBanner(false);
    setShowManageCookies(false);
  }

  function handleManageCookies() {
    setShowManageCookies(true);
  }

  function closeCookiesModal() {
    setShowCookieBanner(false);
    setShowManageCookies(false);
  }

  return (
    <div
      className={clsx({
        ['container']: true,
        ['manage-cookies-open']: showManageCookies,
      })}
    >
      {showCookieBanner && (
        <Cookie
          onAllowCookies={handleAllowCookies}
          onDeclineCookies={handleDeclineCookies}
          onManageCookies={handleManageCookies}
        />
      )}

      <ManageCookies
        isOpen={showManageCookies}
        onAllowCookies={handleAllowCookies}
        onDeclineCookies={handleDeclineCookies}
        closeCookiesModal={closeCookiesModal}
      />
    </div>
  );
}

export default App;
