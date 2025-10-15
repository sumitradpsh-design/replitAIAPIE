import VocabWordCard from '../VocabWordCard';

export default function VocabWordCardExample() {
  return (
    <div className="space-y-3 p-4 max-w-md">
      <VocabWordCard
        word="Hola"
        translation="Hello"
        emoji="👋"
        onSpeak={() => console.log('Speaking: Hola')}
      />
      <VocabWordCard
        word="Gracias"
        translation="Thank you"
        emoji="🙏"
        onSpeak={() => console.log('Speaking: Gracias')}
      />
      <VocabWordCard
        word="Amigo"
        translation="Friend"
        emoji="🤝"
        onSpeak={() => console.log('Speaking: Amigo')}
      />
    </div>
  );
}
