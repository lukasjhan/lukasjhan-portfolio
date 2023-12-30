import { GridItemInterface } from '@/config/site-config';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Icon from '../icon';

const Project = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ''}
      target="_blank"
      className="flex flex-col justify-between gap-1"
    >
      <div className="flex items-center justify-between gap-4">
        {item.icon && <Icon type={item.icon} color={item.color} />}
        <div className="w-full @lg:text-lg  font-semibold">{item.title}</div>
        <div className="flex items-center gap-1">
          <div className="mt-[1px]">{item.stars}</div>
          {item.button !== false && <Star fill="currentColor" size={16} />}
        </div>
      </div>
      <div className="mt-2">
        {item.description && (
          <div className="mt-1 text-sm text-neutral-500 line-clamp-2">
            {item.description}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Project;
