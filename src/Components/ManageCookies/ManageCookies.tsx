import { useRef, useState } from 'react';
import './ManageCookies.css';
import { Button } from '../Button/Button';
import Cookies from 'js-cookie';
import { ToggleButton } from '../ToggleButton/ToggleButton';

type CookieInfoProps = {
  title: string;
  description: string;
  toggleDisabled?: boolean;
  isToggled?: boolean;
  onToggle?: () => void;
};
function CookieInfo({
  title,
  description,
  toggleDisabled = false,
  isToggled = true,
  onToggle,
}: CookieInfoProps) {
  // const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    onToggle?.();
  }
  return (
    <div>
      <div className="cookie-info-toggle-container">
        <label>{title}</label>
        <ToggleButton
          onToggle={handleToggle}
          isToggled={isToggled}
          disabled={toggleDisabled}
        />
      </div>
      <p>{description}</p>
    </div>
  );
}

type Props = {
  isOpen: boolean;
  onAllowCookies: () => void;
  onDeclineCookies: () => void;
  closeCookiesModal: () => void;
};

export function ManageCookies({
  isOpen,
  onAllowCookies,
  onDeclineCookies,
  closeCookiesModal,
}: Props) {
  const showEssentialsCookies = true; // default, can not be changed
  const [showAnalyticsCookies, setShowAnalyticsCookies] = useState(true);
  const [showMarketingCookies, setShowMarketingCookies] = useState(true);
  const ref = useRef<HTMLDialogElement | null>(null);

  function handleAllowSelectedCookies() {
    Cookies.set('essentials-cookies', 'userid_123');
    if (showAnalyticsCookies) Cookies.set('analytics-cookies', 'userid_123');
    if (showMarketingCookies) Cookies.set('marketing-cookies', 'userid_123');

    closeCookiesModal?.();
    ref.current?.close();
  }

  function handleAllowCookies() {
    onAllowCookies?.();
    ref.current?.close();
  }

  function handleDeclineCookies() {
    onDeclineCookies?.();
    ref.current?.close();
  }

  function handleToggleAnalytics() {
    setShowAnalyticsCookies(!showAnalyticsCookies);
  }

  function handleToggleMarketing() {
    setShowMarketingCookies(!showMarketingCookies);
  }
  return (
    <div className={isOpen ? 'overlay' : undefined}>
      <dialog className="max-width-wrapper" open={isOpen} ref={ref}>
        <div className="manage-cookies-container">
          <CookieInfo
            title="Essentials"
            description="These cookies are essential for the proper functioning of our services
          and cannot be disabled."
            toggleDisabled={true}
          />
          <CookieInfo
            title="Analytics"
            description="These cookies collect information about how you use our services or
          potential errors you encounter. Based on this information we are able
          to improve your experience and react to any issues."
            onToggle={handleToggleAnalytics}
            isToggled={showAnalyticsCookies}
          />
          <CookieInfo
            title="Marketing"
            description="These cookies allow us to show you advertisements relevant to you
          through our advertising partners."
            onToggle={handleToggleMarketing}
            isToggled={showMarketingCookies}
          />

          <div className="accept-save-buttons">
            <Button title="Accept all" onClick={handleAllowCookies} />
            <Button
              title="Save"
              onClick={handleAllowSelectedCookies}
              variant="secondary"
            />
          </div>
          <Button
            title="Decline all"
            onClick={handleDeclineCookies}
            variant="tertiary"
            styles="decline-button"
          />
        </div>
      </dialog>
    </div>
  );
}
