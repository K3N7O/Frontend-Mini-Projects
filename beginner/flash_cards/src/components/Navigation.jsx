export default function Navigation({ value, onClick, onDirect }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => onDirect(false)}>Previous</button>
      <button onClick={onClick}>Show Answer</button>
      <button onClick={() => onDirect(true)}>Next</button>
    </div>
  );
}
