export default function Card({ details, state }) {
  return <div>{!state ? details.description : details.answer}</div>;
}
