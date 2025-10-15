import CharacterAvatar from '../CharacterAvatar';

export default function CharacterAvatarExample() {
  return (
    <div className="flex gap-6 items-center p-4">
      <CharacterAvatar
        character="🦉"
        size="small"
        borderColor="#4ECDC4"
      />
      <CharacterAvatar
        character="🐉"
        size="medium"
        borderColor="#FF6B6B"
        accessory="👑"
      />
      <CharacterAvatar
        character="🦁"
        size="large"
        borderColor="#FFD700"
        accessory="🎓"
      />
    </div>
  );
}
