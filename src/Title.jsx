export default function Title({ locked }) {
  return (
    <h1 className="title">{`${
      locked ? "Buy PRO for > 5" : "React Counter"
    }`}</h1>
  );
}
