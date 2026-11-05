export default function Navigation({ onClick, onDirect }) {
  return (
    <div>
      <button onClick={() => onDirect(false)}>Previous</button>
      <button onClick={onClick}>Show Answer</button>
      <button onClick={() => onDirect(true)}>Next</button>
    </div>
  );
}
