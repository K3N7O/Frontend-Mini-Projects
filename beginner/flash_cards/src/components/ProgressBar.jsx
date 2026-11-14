<<<<<<< HEAD
export default function ProgressBar({ currentValue, total }) {
  const percentage = (((currentValue + 1) / total) * 100).toFixed(0);

  return (
    <div className="progressBar">
      <div className="bar" style={{ width: `${percentage}%` }}>
        <p>{percentage}</p>
      </div>
      &nbsp;
      <span>{`${currentValue + 1} of ${total}`}</span>
=======
export default function ProgressBar({ currentIndex, totalIndex }) {
  const percentage = (currentIndex / totalIndex) * 100;
  return (
    <div className="progress">
      <div className="bar" style={{ width: `${percentage - 1.5}%` }}>
        <span>{percentage.toFixed(0)}%</span>

        <span>
          {currentIndex} of {totalIndex}
        </span>
      </div>
>>>>>>> 049ecb651ef23beffc2730e9b019d5e4108db45c
    </div>
  );
}
