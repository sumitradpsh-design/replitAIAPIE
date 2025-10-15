import WorldCard from '../WorldCard';

export default function WorldCardExample() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <WorldCard
        name="Spanish"
        flag="🇪🇸"
        color="linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)"
        isLocked={false}
        onClick={() => console.log('Spanish world clicked')}
      />
      <WorldCard
        name="French"
        flag="🇫🇷"
        color="linear-gradient(135deg, #4ECDC4 0%, #556FFF 100%)"
        isLocked={true}
        onClick={() => console.log('French world clicked')}
      />
    </div>
  );
}
