export default function Button({ buttonName, buttonType, buttonValue, onLogin }) {
  return (
    <button type={buttonType} name={buttonName}>
      {buttonValue}
    </button>
  );
}
