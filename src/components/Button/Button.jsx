export default function Button({ buttonName, buttonType, buttonValue }) {
  return (
    <button type={buttonType} name={buttonName}>
      {buttonValue}
    </button>
  );
}
