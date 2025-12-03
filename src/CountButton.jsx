import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ locked, type, setCount }) {
  const handleClick = (event) => {
    if (type === "minus") {
      setCount((prev) => {
        const newNumber = prev - 1;
        if (newNumber < 0) {
          return 0;
        } else {
          return prev - 1;
        }
      });
      event.currentTarget.blur();
    } else {
      setCount((prev) => {
        const newNumber = prev + 1;
        if (newNumber > 5) {
          return 5;
        } else {
          return prev + 1;
        }
      });
      event.currentTarget.blur();
    }
  };

  return (
    <button onClick={handleClick} className="count-btn" disabled={locked}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
