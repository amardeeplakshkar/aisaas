// components/Header.tsx
import React from 'react';
import { MessageSquare, Code, ImageIcon, Music, Settings, VideoIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  icon: string;
  label?: string;
  description?: string;
  size?: number;
  color?: any;
}

const Header: React.FC<HeaderProps> = ({ icon, size, label, description, color  }) => {

  const getIconComponent = () => {
    switch (icon) {
      case 'MessageSquare':
        return MessageSquare;
      case 'Code':
        return Code;
      case 'ImageIcon':
        return ImageIcon;
      case 'Music':
        return Music;
      case 'Settings':
        return Settings;
      case 'VideoIcon':
        return VideoIcon;
      case 'ArrowUpIcon':
        return ArrowUpIcon;
      default:
        return null;
    }
  };

  const IconComponent = getIconComponent();

  return (
    <div className="w-full grid bg-slate-500/10 p-5 place-items-center">
      <div className="flex items-center">
      <div className={cn('p-4 rounded-xl', `text-${color}`, `bg-${color}/10`)}>
          {IconComponent ? <IconComponent size={30} /> : <div>Icon not found</div>}
        </div>
        <div className='p-4'>
          <h3 className='text-2xl font-bold'>{label}</h3>
          <p className='text-muted-foreground text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;