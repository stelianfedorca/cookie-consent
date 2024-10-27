import './ToggleButton.css';

type Props = {
  isToggled?: boolean;
  disabled?: boolean;
  onToggle: () => void;
};
export function ToggleButton({ isToggled, disabled = false, onToggle }: Props) {
  if (disabled) {
    return (
      <div className="toggle-button-container-disabled">
        <button className="toggle-button disabled" />
      </div>
    );
  }
  return (
    <div
      className={`toggle-button-container ${isToggled ? 'toggled' : undefined}`}
    >
      <button
        onClick={onToggle}
        className={`toggle-button ${isToggled ? 'toggled' : undefined}`}
      />
    </div>
  );
}
