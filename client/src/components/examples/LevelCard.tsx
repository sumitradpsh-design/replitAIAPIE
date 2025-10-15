import LevelCard from '../LevelCard';

export default function LevelCardExample() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <LevelCard
        levelNumber={1}
        stars={3}
        isLocked={false}
        onClick={() => console.log('Level 1 clicked')}
      />
      <LevelCard
        levelNumber={2}
        stars={1}
        isLocked={false}
        onClick={() => console.log('Level 2 clicked')}
      />
      <LevelCard
        levelNumber={3}
        stars={0}
        isLocked={true}
        onClick={() => console.log('Level 3 clicked')}
      />
    </div>
  );
}
