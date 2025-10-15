import { Star, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SeasonBadge } from './SeasonBadge';

interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  bestTime: string;
  season: 'summer' | 'winter' | 'monsoon' | 'spring';
  attractions: string[];
  seasonalTip: string;
}

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden border-0 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <SeasonBadge season={destination.season} />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
          <div className="flex items-center gap-1 text-white/90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Popular Destination</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="font-semibold text-lg">{destination.rating}</span>
            <span className="text-muted-foreground text-sm">/5</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{destination.bestTime}</span>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          {destination.description}
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground">Top Attractions</h4>
          <div className="flex flex-wrap gap-2">
            {destination.attractions.map((attraction, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-muted hover:bg-muted/80 text-foreground border-0"
              >
                {attraction}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 p-1.5 rounded-full bg-primary/10">
              <Star className="h-3.5 w-3.5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-1">Seasonal Tip</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {destination.seasonalTip}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
