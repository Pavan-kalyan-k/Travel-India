import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DestinationCard } from '@/components/DestinationCard';
import { destinationsByState } from '@/data/destinations';

const Results = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedState = searchParams.get('state');
  const destinations = selectedState ? destinationsByState[selectedState] || [] : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-[var(--gradient-tropical)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Compass className="h-10 w-10 text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Destinations in {selectedState}
            </h1>
          </div>
          <p className="text-xl text-white/90">
            Explore the top tourist destinations with season-specific recommendations
          </p>
        </div>
      </div>

      {/* Results Section */}
      {destinations.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Top {destinations.length} Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated picks based on traveler ratings, seasonal attractions, and local insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Compass className="h-20 w-20 text-primary mx-auto mb-6 opacity-50" />
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            No Destinations Found
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            We don't have information for this state yet. Please try another state.
          </p>
          <Button onClick={() => navigate('/')}>
            Back to Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default Results;
