import StarDisplay from '../StarDisplay';

export default function StarDisplayExample() {
  return (
    <div className="space-y-6 p-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small - 2 stars</p>
        <StarDisplay stars={2} size="small" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium - 3 stars</p>
        <StarDisplay stars={3} size="medium" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large - 1 star (animated)</p>
        <StarDisplay stars={1} size="large" animated />
      </div>
    </div>
  );
}
