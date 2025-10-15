import { Sun, Cloud, Droplets, Snowflake } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Season = 'summer' | 'winter' | 'monsoon' | 'spring';

interface SeasonBadgeProps {
  season: Season;
  className?: string;
}

const seasonConfig = {
  summer: {
    icon: Sun,
    label: 'Best for Summer',
    className: 'bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground border-0'
  },
  winter: {
    icon: Snowflake,
    label: 'Best for Winter',
    className: 'bg-gradient-to-r from-primary to-primary-light text-primary-foreground border-0'
  },
  monsoon: {
    icon: Droplets,
    label: 'Best for Monsoon',
    className: 'bg-gradient-to-r from-accent to-purple-400 text-accent-foreground border-0'
  },
  spring: {
    icon: Cloud,
    label: 'Best for Spring',
    className: 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0'
  }
};

export function SeasonBadge({ season, className }: SeasonBadgeProps) {
  const config = seasonConfig[season];
  const Icon = config.icon;

  return (
    <Badge className={`${config.className} ${className} flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium`}>
      <Icon className="h-3.5 w-3.5" />
      <span>{config.label}</span>
    </Badge>
  );
}
