import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StateSelector } from '@/components/StateSelector';
import { getCurrentSeason, getSeasonalMessage } from '@/data/destinations';

const Index = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const currentSeason = getCurrentSeason();

  const handleSubmit = () => {
    if (selectedState) {
      navigate(`/results?state=${encodeURIComponent(selectedState)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[var(--gradient-tropical)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="h-12 w-12 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Discover India's
            <br />
            <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
              Hidden Gems
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-black/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Smart, season-aware travel recommendations for your perfect Indian adventure
          </p>
          <div className="flex items-center justify-center gap-2 text-black/80 text-lg">
            <Sparkles className="h-5 w-5 text-secondary-dark" />
            <span>{getSeasonalMessage(currentSeason)}</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="space-y-6">
          <StateSelector onStateSelect={setSelectedState} selectedState={selectedState} />
          
          {selectedState && (
            <div className="flex justify-center animate-in fade-in-50 slide-in-from-top-4">
              <Button
                onClick={handleSubmit}
                size="lg"
                className="h-14 px-12 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                Explore {selectedState}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Empty State */}
      {!selectedState && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <Compass className="h-20 w-20 text-primary mx-auto mb-6 opacity-50" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Explore?
            </h3>
            <p className="text-lg text-muted-foreground">
              Select a state above to discover its top tourist destinations with season-specific recommendations
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">TravelIndia</span>
            </div>
            <p className="text-muted-foreground">
              Your intelligent companion for discovering India's best destinations
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Season-aware • Curated • Updated {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
