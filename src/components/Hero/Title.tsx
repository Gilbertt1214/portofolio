import { AnimatedText } from '../ui/AnimatedText';

export function Title() {
  return (
    <div className="space-y-4 flex flex-col">
      <AnimatedText
        text="Fahriana Nurzukhruf "
        className="text-5xl md:text-7xl font-bold"
        delay={2}
      />
      <AnimatedText
        text="PENGANGGURAN"
        className="text-2xl md:text-3xl text-gray-300"
        delay={4}
      />
    </div>
  );
}