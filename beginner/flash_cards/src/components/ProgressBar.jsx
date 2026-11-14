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
    </div>
  );
}
