export default function Card({ details, state }) {
  return (
    <div className=".card">{!state ? details.description : details.answer}</div>
  );
}
