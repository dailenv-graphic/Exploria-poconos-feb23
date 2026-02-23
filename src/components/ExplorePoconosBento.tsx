import { useState, useEffect } from 'react';
import { Star, Waves, ShoppingBag, Trees, X, MapPin, Clock, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BentoItem {
  id: number;
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  className: string;
  details: {
    description: string;
    location: string;
    hours?: string;
    highlights: string[];
  };
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    icon: Star,
    title: 'Lehigh Gorge Scenic Railway',
    text: 'Just 6.5 miles away - experience all four parks.',
    image: '/railway.jpg',
    className: 'md:col-span-2',
    details: {
      description: 'A breathtaking railroad journey through one of Pennsylvania\'s most stunning natural gorges.',
      location: 'Jim Thorpe, PA — 45 miles from resort',
      hours: 'just 90 miles from NYC',
      highlights: ['Scenic gorge views', 'Historic Jim Thorpe', 'Seasonal excursions', 'Fall foliage rides'],
    },
  },
  {
    id: 2,
    icon: Star,
    title: 'Bushkill Falls',
    text: 'Thrilling rides, magical adventures, and world-class entertainment at Universal Poconos.',
    image: '/bushkill_falls.jpg.webp',
    className: 'md:row-span-2',
    details: {
      description: 'Pennsylvania\'s Niagara; stunning waterfalls and scenic hiking trails.',
      location: 'Poconos, FL - 25 miles from resort',
      hours: 'Park hours vary - Check Universal website',
      highlights: ['The Wizarding World of Harry Potter™', 'Thrilling roller coasters', 'Universal\'s Volcano Bay™', 'CityWalk entertainment'],
    },
  },
  {
    id: 3,
    icon: Waves,
    title: 'Pocono RacewayTagline',
    text: 'Marine life encounters, thrilling coasters, spectacular shows.',
    image: '/raceway.jpeg.webp',
    className: '',
    details: {
      description: 'Home of NASCAR\'s iconic "Tricky Triangle" and unforgettable race experiences.',
      location: 'Poconos, FL - 30 miles from resort',
      highlights: ['Marine animal encounters', 'Mako® roller coaster', 'Aquatica® water park', 'Educational experiences'],
    },
  },
  {
    id: 4,
    icon: Trees,
    title: 'Kalahari Resorts',
    text: 'Perfect for families with young children, 30 miles away.',
    image: '/kalahari-waterswing.jpg',
    className: '',
    details: {
      description: 'America\'s largest indoor waterpark resort, perfect for family fun year-round.',
      location: 'Winter Haven, FL - 30 miles from resort',
      hours: 'Park hours vary by season',
      highlights: ['50+ rides & attractions', 'LEGO-themed experiences', 'Water park', 'Perfect for ages 2-12'],
    },
  },
  {
    id: 5,
    icon: ShoppingBag,
    title: 'Premium Outlets',
    text: 'Poconos International Premium Outlets and Lake Buena Vista Factory Stores.',
    image: '/shopping.png',
    className: 'md:col-span-2',
    details: {
      description: 'Tannersville Crossings Premium Outlets and top shopping destinations nearby.',
      location: 'Multiple locations near Poconos',
      hours: 'Mon-Sat 10am-9pm, Sun 10am-7pm',
      highlights: ['180+ brand-name stores', 'Up to 65% off retail', 'Dining options', 'Tax-free shopping options'],
    },
  },
  {
    id: 6,
    icon: Trees,
    title: 'Pocono Mountains Skiing',
    text: 'World-class ski resorts including Blue Mountain and Jack Frost/Big Boulder.',
    image: '/skiing.jpg',
    className: '',
    details: {
      description: 'World-class ski resorts including Blue Mountain and Jack Frost/Big Boulder.',
      location: 'Poconos, PA - Multiple resort locations',
      hours: 'Seasonal - Winter months',
      highlights: ['Blue Mountain Resort', 'Jack Frost/Big Boulder', 'Expert trails', 'Family-friendly slopes'],
    },
  },
];

interface LightboxProps {
  item: BentoItem;
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  const IconComponent = item.icon;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 safe-bottom safe-top"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-56 md:h-72">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-18rem)]">
          <p className="text-gray-700 leading-relaxed mb-6">
            {item.details.description}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{item.details.location}</span>
            </div>
            {item.details.hours && (
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{item.details.hours}</span>
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.details.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExplorePoconosBento() {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);
  const sectionAnimation = useScrollAnimation();

  return (
    <section ref={sectionAnimation.ref as React.RefObject<HTMLElement>} className={`py-16 md:py-20 bg-white scroll-animate ${sectionAnimation.isVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Poconos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover world-class outdoor adventures, attractions, and year-round activities nestled in the heart of Pennsylvania's most beloved mountain destination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[200px]">
          {bentoItems.map((item) => {
            const IconComponent = item.icon;
            const gridClass = item.id === 1 || item.id === 5
              ? 'col-span-2'
              : item.id === 2
                ? 'row-span-2'
                : '';
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${gridClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-md" />
                    <h3 className="text-sm md:text-xl font-bold text-white drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-base text-white/90 leading-relaxed line-clamp-2">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
