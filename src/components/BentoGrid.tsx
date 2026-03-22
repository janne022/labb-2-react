import type { ReactNode } from "react";

export interface BentoItem {
  id: string | number;
  className?: string;
  content: ReactNode;
}

interface BentoGridProps {
  items: BentoItem[];
  containerClassName?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  items,
  containerClassName = "",
}) => {
  return (
    <section
      className={`items-center justify-center h-screen w-full ${containerClassName}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[120px] w-full max-w-6xl mx-auto">
        {items.map((item) => (
          <div key={item.id} className={item.className}>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
};
