import CountButton from "./CountButton";

export default function ButtonContainer({ children }) {
  // const handlePlus = () => setCount((prev) => prev + 1);
  // const handleMinus = () => setCount((prev) => prev - 1);

  return <div className="button-container">{children}</div>;
}
