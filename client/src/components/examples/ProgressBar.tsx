import ProgressBar from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="space-y-6 p-4 max-w-md">
      <ProgressBar
        progress={75}
        max={100}
        color="#4ECDC4"
        label="Spanish Progress"
      />
      <ProgressBar
        progress={30}
        max={100}
        color="#FF6B6B"
        label="French Progress"
      />
      <ProgressBar
        progress={100}
        max={100}
        color="#FFD700"
        label="Level Completed!"
        showPercentage={false}
      />
    </div>
  );
}
