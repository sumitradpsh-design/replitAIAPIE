import MiniGameCard from '../MiniGameCard';

export default function MiniGameCardExample() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <MiniGameCard
        type="match"
        title="Word Match"
        color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        onClick={() => console.log('Match game clicked')}
      />
      <MiniGameCard
        type="build"
        title="Sentence Builder"
        color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        onClick={() => console.log('Build game clicked')}
      />
      <MiniGameCard
        type="speak"
        title="Speak It!"
        color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        onClick={() => console.log('Speak game clicked')}
      />
    </div>
  );
}
