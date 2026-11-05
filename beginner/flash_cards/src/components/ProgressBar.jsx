export default function ProgressBar({ currentValue, total }) {
  const percentage = (((currentValue + 1) / total) * 100).toFixed(0);

  return (
    <div className="progressBar">
      <div className="bar" style={{ width: `${percentage}%` }}>
        <p>{percentage}</p>
      </div>
      &nbsp;
      <span>{`${currentValue + 1} of ${total}`}</span>
    </div>
  );
}
