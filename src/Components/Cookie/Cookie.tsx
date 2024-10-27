import { Button } from '../Button/Button';
import './Cookie.css';

type Props = {
  onAllowCookies: () => void;
  onDeclineCookies: () => void;
  onManageCookies: () => void;
};
export function Cookie({
  onAllowCookies,
  onDeclineCookies,
  onManageCookies,
}: Props) {
  return (
    <div className="cookie-container">
      <h1>We use cookies</h1>
      <p className="cookie-consent">
        We use cookies to enhance your browsing experience and improve our
        website's performance. By continuing to use this site, you consent to
        the use of cookies. To learn more about how we use cookies and your
        options, please read our{' '}
        <a href="https://google.com" target="_blank">
          cookie policy.
        </a>
      </p>
      <div className="buttons-container">
        <div className="manage-buttons">
          <Button
            title="Allow cookies"
            styles="cookie-button"
            onClick={onAllowCookies}
          />
          <Button
            title="Manage cookies"
            styles="cookie-button"
            onClick={onManageCookies}
            variant="secondary"
          />
        </div>
        <Button
          title="Decline all"
          styles="cookie-button"
          onClick={onDeclineCookies}
          variant="tertiary"
        />
      </div>
    </div>
  );
}
