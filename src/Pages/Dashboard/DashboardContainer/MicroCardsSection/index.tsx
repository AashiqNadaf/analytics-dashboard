import { memo, useState } from 'react';
import Card from './Card.tsx';
import type { MicroCardsSectionDATA } from './interface.ts';
import { microCardsSectionData } from './constant.ts';

const MicroCardsSection = () => {
  const [cardsData] = useState<MicroCardsSectionDATA[]>(
    () => microCardsSectionData
  );

  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 sm:h-[252px]">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default memo(MicroCardsSection);
