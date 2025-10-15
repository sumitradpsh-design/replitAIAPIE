/**
 * CharacterAvatar Component
 * 
 * Shows the child's learning companion character!
 * 
 * Features:
 * - Round avatar with fun animal emojis
 * - Colorful border that matches the world theme
 * - Can show unlockable accessories (hats, glasses, etc.)
 * - Different expressions for different situations
 */

interface CharacterAvatarProps {
  character: string;
  size?: 'small' | 'medium' | 'large';
  borderColor?: string;
  accessory?: string;
}

export default function CharacterAvatar({ 
  character, 
  size = 'medium', 
  borderColor = '#4ECDC4',
  accessory 
}: CharacterAvatarProps) {
  const sizeClasses = {
    small: 'w-16 h-16 text-3xl',
    medium: 'w-24 h-24 text-5xl',
    large: 'w-32 h-32 text-7xl',
  };

  return (
    <div className="relative inline-block" data-testid="avatar-character">
      {/* Main avatar circle */}
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center border-4 bg-card`}
        style={{ borderColor }}
        data-testid="container-avatar"
      >
        <span data-testid="emoji-character">{character}</span>
      </div>
      
      {/* Accessory overlay (like a hat or glasses) */}
      {accessory && (
        <div className="absolute -top-2 -right-2 text-2xl" data-testid="emoji-accessory">
          {accessory}
        </div>
      )}
    </div>
  );
}
