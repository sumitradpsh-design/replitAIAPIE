import GameHeader from '../GameHeader';

export default function GameHeaderExample() {
  return (
    <div>
      <GameHeader
        title="Spanish - Level 1"
        stars={15}
        lives={3}
        onBack={() => console.log('Back clicked')}
      />
      <div className="p-4 text-center text-muted-foreground">
        Game content goes here...
      </div>
    </div>
  );
}
