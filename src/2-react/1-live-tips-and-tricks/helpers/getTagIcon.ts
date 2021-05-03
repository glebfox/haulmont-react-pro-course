/* Instruments */
import { icons } from '../theme/icons/tag';

const typedIcons: { [key: string]: React.FC } = icons;

export const getTagIcon = (tag = 'JavaScript') => {
    // const TagIcon = icons[tag as keyof typeof icons];
    const TagIcon = typedIcons[tag];

    return TagIcon;
};
