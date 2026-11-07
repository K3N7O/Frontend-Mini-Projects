export default function Card({ details, state }) {
  return (
    <div className=".card">
      <p>{!state ? details.description : details.answer}</p>
    </div>
  );
}
