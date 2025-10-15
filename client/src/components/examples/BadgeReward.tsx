import BadgeReward from '../BadgeReward';

export default function BadgeRewardExample() {
  return (
    <div className="grid grid-cols-4 gap-6 p-4">
      <BadgeReward
        name="First Steps"
        icon="star"
        color="#FFD700"
        isUnlocked={true}
      />
      <BadgeReward
        name="Word Master"
        icon="trophy"
        color="#FF6B6B"
        isUnlocked={true}
      />
      <BadgeReward
        name="Perfect Score"
        icon="target"
        color="#4ECDC4"
        isUnlocked={false}
      />
      <BadgeReward
        name="Champion"
        icon="award"
        color="#A78BFA"
        isUnlocked={false}
      />
    </div>
  );
}
