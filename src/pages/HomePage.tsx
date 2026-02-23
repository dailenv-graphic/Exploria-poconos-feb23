import { useState, useMemo, useEffect, useRef } from 'react';
import { Ship, Home, Play, ChevronDown, ChevronLeft, ChevronRight, Quote, RotateCcw, Utensils, Waves, Gamepad2, Dumbbell, Star, Bed, Sofa, UtensilsCrossed, Tv, Mountain, Wifi, WashingMachine, Award, MapPin, Building, Building2, Sun, Palmtree, Palmtree as TreePalm, Sparkles, Compass, ShoppingBag, ArrowRight, Flame, Calendar } from 'lucide-react';
import HowItWorksSection from '../components/HowItWorksSection';
import FinalCTASection from '../components/FinalCTASection';
import ExplorePoconosBento from '../components/ExplorePoconosBento';
import OfferShowcaseSection from '../components/OfferShowcaseSection';
import VideoModal from '../components/VideoModal';
import Modal from '../components/Modal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onBookNow: () => void;
  scrollToSection: (id: string) => void;
  activeSection: 'condo' | 'cruise' | null;
  headerVisible: boolean;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  theme: 'orange' | 'teal';
}

const testimonials: Testimonial[] = [
  {
    quote: "Love this place! We do our family reunions here each year and can't be any happier with everything they have to offer.",
    name: "Wayne M.",
    title: "Verified Owner",
    theme: "orange"
  },
  {
    quote: "We've been coming to Poconos Mountain Villas for 15 years!",
    name: "Joanne G.",
    title: "Verified Owner",
    theme: "teal"
  },
  {
    quote: "I love this place. I've been An owner since it was in Pre-construction!",
    name: "Tori M.",
    title: "Verified Owner",
    theme: "orange"
  },
  {
    quote: "We have been staying at Poconos Mountain Villas ... for nearly two decades now. The staff is friendly and efficient, the units are well designed and well maintained. We find them to be a perfect!",
    name: "Rob C.",
    title: "Verified Owner",
    theme: "teal"
  }
];

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

export default function HomePage({ onBookNow, scrollToSection, activeSection, headerVisible }: HomePageProps) {
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galleryLightboxIndex, setGalleryLightboxIndex] = useState<number | null>(null);
  const [accommodationLightbox, setAccommodationLightbox] = useState<'villa' | 'resort' | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [accommodationImageIndex, setAccommodationImageIndex] = useState(0);
  const [condoImageIndex, setCondoImageIndex] = useState(0);
  const [resortImageIndex, setResortImageIndex] = useState(0);
  const [thingsToDoImageIndex, setThingsToDoImageIndex] = useState(0);

  const gallerySection = useScrollAnimation();
  const accommodationsSection = useScrollAnimation();
  const card1 = useScrollAnimation();
  const card2 = useScrollAnimation();
  const card3 = useScrollAnimation();
  const card4 = useScrollAnimation();
  const whyOwnersSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const trustSection = useScrollAnimation();
  const faqSection = useScrollAnimation();

  const accommodationImages = [
    { src: '/main cards/4_img.jpg', label: '18-Hole Golf Course' },
    { src: '/main cards/1_img.jpg', label: '1-Bedroom Villa' },
    { src: '/main cards/7_img.jpg', label: 'Accommodations' },
    { src: '/outdoor_activities.jpg', label: 'Pool & Recreation' },
    { src: '/main cards/2_img.jpg', label: 'Accommodations' },
  ];

  const condoImages = [
    { src: '/bed.jpg', label: 'One Bedroom Condo' },
    { src: '/kitchen.jpg', label: 'One Bedroom Condo' },
    { src: '/sala.jpg', label: 'One Bedroom Condo' },
    { src: '/exterior_poconos.jpg', label: 'One Bedroom Condo' },
  ];

  const resortImages = [
    { src: '/main cards/mexico.jpg', label: 'Resort Condo Stay' },
    { src: '/caribbean.jpg', label: 'Resort Condo Stay' },
    { src: '/main cards/canada_img.jpg', label: 'Resort Condo Stay' },
  ];

  const thingsToDoImages = [
    { src: '/camelback_mountain.jpg', label: 'Disney Springs' },
    { src: '/lehigh_river.jpg', label: 'Theme Parks' },
    { src: '/bushkill_falls.jpg.webp', label: 'Universal Poconos Resort' },
    { src: '/lehigh_river.jpg', label: 'SeaWorld Poconos' },
  ];

  const activityImages = [
    { src: '/main cards/5_img.jpg', label: 'Outdoor Activities' },
    { src: '/warehouse.jpg', label: 'On-site Dinning' },
    { src: '/main cards/6_img.jpg', label: 'Poconos Scenery' },
    { src: '/main cards/3_img.jpg', label: 'Resort Views' },
  ];

  const galleryImages = useMemo(() =>
    [...accommodationImages, ...activityImages].sort(() => Math.random() - 0.5),
    []
  );

  // Auto-scroll effect with looping
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Check if we've scrolled to the end, then reset to beginning
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  const handlePrevImage = () => {
    setGalleryLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setGalleryLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  const handlePlayVideo = (url: string) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative pt-[120px] pb-0 min-h-screen-safe flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/main cards/4_img.jpg"
            alt="Poconos Mountain Villas Poconos Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 mb-8">
          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
            {/* Badge and Content Card - Badge overlaps the card */}
            <div className="relative animate-fade-in-up">
              {/* Badge positioned to overlap top of card */}
              <div className="absolute -top-20 sm:-top-28 left-1/2 transform -translate-x-1/2 z-20">
                <img
                  src="/poconos_stamp.png"
                  alt="Owner Badge"
                  className="w-44 h-44 sm:w-56 sm:h-56 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Main Message Box */}
              <div className="relative z-10 rounded-3xl px-8 sm:px-12 lg:px-16 pt-20 sm:pt-24 pb-8 sm:pb-10 shadow-2xl overflow-hidden">
                {/* Enhanced frosted glass background */}
                <div className="absolute inset-0 bg-white/15 backdrop-blur-[60px] rounded-3xl"></div>

                {/* Static teal border */}
                <div className="absolute inset-0 rounded-3xl border-4" style={{ borderColor: '#239D93' }}></div>

                {/* Animated white shimmer line */}
                <div className="absolute inset-0 rounded-3xl overflow-visible pointer-events-none">
                  <div className="absolute top-0 -left-40 w-40 h-[4px] bg-gradient-to-r from-transparent via-white/90 to-transparent animate-shimmer-line shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                </div>

                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                  Hi <span className="text-[#F5E531] animate-pulse-slow">%First_Name%</span>, Claim Your $99 Poconos Getaway
                </h1>
              </div>
            </div>

            {/* Text below card */}
            <div className="space-y-3 animate-fade-in animation-delay-200">
              <h2 className="text-2xl font-bold text-white leading-relaxed drop-shadow-lg">
                Get a 4-Day Poconos Mountain Villas Poconos Getaway for Only $99
                <span className="flex items-center justify-center gap-2 text-lg sm:text-xl text-white/90 font-medium italic mt-2">
                  <img src="/beach_access.svg" alt="" className="w-5 h-5 inline-block" />
                  Includes 3-night stay at Poconos Mountain Villas + Bonus 7-Night Resort Getaway at 50+ Resorts
                </span>
              </h2>

              <p className="flex items-center justify-center gap-2 text-lg sm:text-xl text-white/90 font-medium italic drop-shadow-md">
                <img src="/calendar.svg" alt="" className="w-5 h-5 inline-block" />
                Book by <span className="text-teal-400">May 17, 2026</span> and get a BONUS 7-night Resort Condo Getaway
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in animation-delay-400">
              <button
                onClick={onBookNow}
                className="group bg-gradient-to-r from-[#F5E531] to-[#E5D521] text-[#222222] px-10 sm:px-14 py-3 sm:py-4 rounded-full text-base sm:text-lg font-black uppercase tracking-wider hover:from-[#E5D521] hover:to-[#D5C511] transition-all transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-[#F5E531]/50 border-4 border-white/30 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center justify-center gap-3">
                  RESERVE NOW
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Deadline Banner - Full Width at Bottom */}
        <div className="relative z-10 w-full bg-gradient-to-r from-[#F5E531] via-[#F5E531] to-[#F5E531] py-4 sm:py-5 shadow-2xl animate-fade-in animation-delay-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[#222222] font-black text-sm sm:text-base md:text-lg tracking-widest uppercase flex items-center justify-center gap-2 flex-wrap">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              BOOK AND TRAVEL BY
              <span className="underline decoration-4 underline-offset-4">MAY 17, 2026</span>
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Gallery */}
      <section ref={gallerySection.ref as React.RefObject<HTMLElement>} className={`py-12 bg-white overflow-hidden scroll-animate ${gallerySection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">Poconos Mountain Villas</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Your Poconos Escape Awaits</h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex space-x-6 overflow-x-hidden pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate images for seamless looping */}
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                onClick={() => setGalleryLightboxIndex(index % galleryImages.length)}
                className="flex-shrink-0 w-72 md:w-80 lg:w-96 group cursor-pointer"
              >
                <div className="relative h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-transform duration-300 group-hover:translate-y-[-4px]">{image.label}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                    <span className="text-white text-sm font-bold">{String((index % galleryImages.length) + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </section>

      <OfferShowcaseSection onBookNow={onBookNow} />

      <HowItWorksSection onBookNow={onBookNow} />

      {/* Accommodations Section */}
      <section ref={accommodationsSection.ref as React.RefObject<HTMLElement>} id="accommodations" className={`py-20 bg-[#F5F5F5] scroll-animate ${accommodationsSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <p className="text-teal-600 uppercase tracking-widest text-sm font-semibold mb-4">where you'll stay</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              ENJOY YOUR OWNER FEEDBACK GETAWAY
            </h2>
          </div>
        </div>

        {/* Card 1: ACCOMMODATIONS - Image Left, Content Right */}
        <div ref={card1.ref as React.RefObject<HTMLDivElement>} className="bg-[#F5F5F5] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl scroll-animate-slide-left ${card1.isVisible ? 'visible' : ''}`}>
                <img
                  src={accommodationImages[accommodationImageIndex].src}
                  alt={accommodationImages[accommodationImageIndex].label}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={() => setAccommodationImageIndex((prev) => (prev === 0 ? accommodationImages.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="flex gap-2">
                    {accommodationImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setAccommodationImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === accommodationImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setAccommodationImageIndex((prev) => (prev === accommodationImages.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className={`scroll-animate-slide-right ${card1.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Accommodations</h3>
                <p className="text-teal-600 font-semibold mb-6 text-lg">Poconos Mountain Villas By Exploria Resorts</p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Discover the ultimate mountain escape at Poconos Mountain Villas! This stunning resort blends the natural beauty of the Pocono Mountains with the comfort and relaxation of a premier vacation destination. Nestled among lush forests and scenic landscapes, Poconos Mountain Villas offers something for everyone in the heart of Pennsylvania's most beloved outdoor playground.
                </p>
                <div>
                  <button
                    onClick={onBookNow}
                    className="w-full sm:w-64 bg-[#F5E531] text-[#222222] py-4 rounded-lg text-lg font-bold hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-xl"
                  >
                    RESERVE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: One Bedroom Condo - Content Left, Image Right */}
        <div ref={card2.ref as React.RefObject<HTMLDivElement>} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`order-2 lg:order-1 scroll-animate-slide-left ${card2.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">One Bedroom Villa</h3>
                <p className="text-teal-600 font-semibold mb-6 text-lg">Your Personal Mountain Retreat</p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Our 1-bedroom condo is ideal for a small family, offering both space and comfort. It features a queen bed and a sofa sleeper, a full kitchen for home-cooked meals, a washer and dryer for convenience, and a flat-screen TV for entertainment.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Bed className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Queen Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Home className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Capacity: 4</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Sofa className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Sofa Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <UtensilsCrossed className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Full kitchen</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Tv className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Flat Screen TV</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <WashingMachine className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">Washer & Dryer</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={onBookNow}
                    className="w-full sm:w-64 bg-[#F5E531] text-[#222222] py-4 rounded-lg text-lg font-bold hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-xl"
                  >
                    RESERVE NOW
                  </button>
                </div>
              </div>

              <div className={`relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2 scroll-animate-slide-right ${card2.isVisible ? 'visible' : ''}`}>
                <img
                  src={condoImages[condoImageIndex].src}
                  alt={condoImages[condoImageIndex].label}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={() => setCondoImageIndex((prev) => (prev === 0 ? condoImages.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="flex gap-2">
                    {condoImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCondoImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === condoImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCondoImageIndex((prev) => (prev === condoImages.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Bonus 7-Night Resort Condo Stay - Image Left, Content Right */}
        <div ref={card3.ref as React.RefObject<HTMLDivElement>} className="bg-[#F5F5F5] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl scroll-animate-slide-left ${card3.isVisible ? 'visible' : ''}`}>
                <img
                  src={resortImages[resortImageIndex].src}
                  alt={resortImages[resortImageIndex].label}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={() => setResortImageIndex((prev) => (prev === 0 ? resortImages.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="flex gap-2">
                    {resortImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setResortImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === resortImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setResortImageIndex((prev) => (prev === resortImages.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className={`scroll-animate-slide-right ${card3.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Bonus 7-Night Resort Condo Stay</h3>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Previously you had 50+ gorgeous resorts to choose in the US, Mexico, Caribbean and Canada. Whether you're dreaming of sun-soaked beaches, vibrant cityscapes, or serene mountain retreats, your perfect getaway awaits. Enjoy spacious accommodations, home-like comforts, and access to fantastic resort activities, allowing you to create lasting memories with loved ones. Embrace the freedom to explore at your own pace, knowing you have a relaxing haven to return to each evening.
                </p>
                <div>
                  <button
                    onClick={onBookNow}
                    className="w-full sm:w-64 bg-[#F5E531] text-[#222222] py-4 rounded-lg text-lg font-bold hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-xl"
                  >
                    RESERVE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Things To Do - Content Left, Image Right */}
        <div ref={card4.ref as React.RefObject<HTMLDivElement>} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`order-2 lg:order-1 scroll-animate-slide-left ${card4.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Explore the Poconos</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Lehigh Gorge Scenic Railway</p>
                      <p className="text-gray-600 text-sm">A breathtaking railroad journey through one of Pennsylvania's most stunning natural gorges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Pocono RacewayTagline</p>
                      <p className="text-gray-600 text-sm">Home of NASCAR's iconic "Tricky Triangle" and unforgettable race experiences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Bushkill Falls</p>
                      <p className="text-gray-600 text-sm">Explore Pennsylvania's Niagara — eight breathtaking waterfalls set in stunning wilderness.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Whitewater Rafting on the Lehigh River</p>
                      <p className="text-gray-600 text-sm">Heart-pumping rapids surrounded by breathtaking mountain scenery.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={onBookNow}
                    className="w-full sm:w-64 bg-[#F5E531] text-[#222222] py-4 rounded-lg text-lg font-bold hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-xl"
                  >
                    RESERVE NOW
                  </button>
                </div>
              </div>

              <div className={`relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2 scroll-animate-slide-right ${card4.isVisible ? 'visible' : ''}`}>
                <img
                  src={thingsToDoImages[thingsToDoImageIndex].src}
                  alt={thingsToDoImages[thingsToDoImageIndex].label}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={() => setThingsToDoImageIndex((prev) => (prev === 0 ? thingsToDoImages.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="flex gap-2">
                    {thingsToDoImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setThingsToDoImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === thingsToDoImageIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setThingsToDoImageIndex((prev) => (prev === thingsToDoImages.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Promotion Section */}
      <section id="bonus-condo" ref={whyOwnersSection.ref as React.RefObject<HTMLElement>} className="relative py-32 overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Caribbean2.jpg"
            alt="Poconos Mountain Villas"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Book by <span className="text-teal-600">May 17, 2026</span> and get a BONUS 7-night Resort Condo Getaway
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              As a special thank you for giving us your feedback, we're also including a bonus 7-night Condo Getaway at your choice of more than 50 beautiful resorts in the US, Mexico, Caribbean and Canada.
            </p>
            <button
              onClick={onBookNow}
              className="inline-block px-12 py-5 bg-[#F5E531] text-[#222222] text-xl font-bold rounded-xl hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-2xl hover:shadow-[#F5E531]/50"
            >
              RESERVE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsSection.ref as React.RefObject<HTMLElement>} id="reviews" className={`py-24 bg-[#F9FAFC] overflow-hidden scroll-animate ${testimonialsSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              WHAT OUR OWNERS ARE SAYING
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what fellow owners and guests have to say about their unforgettable experiences at Club Exploria resorts
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide touch-scroll">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[350px] bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative snap-start"
              >
                <Quote className={`absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 ${testimonial.theme === 'orange' ? 'text-[#FFFCE0]' : 'text-teal-100'}`} />
                <div className="relative z-10">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
                    "{truncateText(testimonial.quote, 15)}"
                  </p>
                  <button
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className={`text-sm font-medium mb-4 sm:mb-6 ${testimonial.theme === 'orange' ? 'text-[#F5E531] hover:text-[#E5D521]' : 'text-teal-600 hover:text-teal-700'} transition-colors cursor-pointer`}
                  >
                    Read more
                  </button>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </section>

      <ExplorePoconosBento />

      {/* Trust Indicator Ribbon */}
      <section ref={trustSection.ref as React.RefObject<HTMLElement>} className={`py-12 bg-[#F9FAFC] scroll-animate ${trustSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Rated 4.8/5</h3>
              <p className="text-gray-600 text-sm">by Owners</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <MapPin className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Poconos, PA</h3>
              <p className="text-gray-600 text-sm">In the Heart of the Mountains</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Building className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">25+ Years</h3>
              <p className="text-gray-600 text-sm">of Exploria Hospitality</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <RotateCcw className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">100% Refundable</h3>
              <p className="text-gray-600 text-sm">$99 Deposit</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSection.ref as React.RefObject<HTMLElement>} className={`py-24 bg-white scroll-animate ${faqSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 uppercase tracking-widest text-sm font-semibold mb-4">Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Is the $99 deposit really refundable?',
                answer: 'Yes! 100% refundable after attending the Owner Update.'
              },
              {
                question: 'Do I have to know my travel dates now?',
                answer: 'No need to pick dates now. Valid through March 2026.'
              },
              {
                question: 'Who is eligible for this offer?',
                answer: 'For registered owners of Poconos Mountain Villas Poconos/Club Exploria.'
              },
              {
                question: 'What is the Owner Update presentation?',
                answer: "A preview of new developments. Attendance required for refund/gifts."
              },
              {
                question: 'What if I need to cancel?',
                answer: "Refer to terms in confirmation email or contact concierge."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection onBookNow={onBookNow} />

      {/* Video Lightbox */}
      <Modal
        isOpen={videoLightboxOpen}
        onClose={() => setVideoLightboxOpen(false)}
        variant="media"
        maxWidth="max-w-4xl"
      >
        <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src="https://jonburtondesign.com/Fire-Ice/media/Exploria%20Resort%20Resort%20Walk%20Through%20Winter_1.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>

      {/* Gallery Lightbox */}
      <Modal
        isOpen={galleryLightboxIndex !== null}
        onClose={() => setGalleryLightboxIndex(null)}
        variant="media"
        maxWidth="max-w-5xl"
      >
        {galleryLightboxIndex !== null && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative w-full">
              <img
                src={galleryImages[galleryLightboxIndex].src}
                alt={galleryImages[galleryLightboxIndex].label}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <p className="text-white text-xl font-semibold text-center">{galleryImages[galleryLightboxIndex].label}</p>
                <p className="text-white/70 text-sm text-center mt-1">{galleryLightboxIndex + 1} / {galleryImages.length}</p>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* Accommodation Lightbox */}
      <Modal
        isOpen={accommodationLightbox !== null}
        onClose={() => setAccommodationLightbox(null)}
        variant="content"
        maxWidth="max-w-4xl"
      >
        {accommodationLightbox && (
          <div className="max-h-[90vh] overflow-hidden">
            {accommodationLightbox === 'villa' ? (
              <>
                <div className="relative h-64 md:h-80">
                  <img
                    src="https://jonburtondesign.com/ORLANDO/Accomodations/LivingRoom1.webp"
                    alt="Villa Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#F5E531] rounded-lg">
                        <Flame className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">The Villa</h3>
                    </div>
                    <p className="text-white/90 text-lg">Your Personal Mountain Retreat</p>
                  </div>
                </div>
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Escape to your private condo, where comfort meets Florida relaxation. Your home away from home features a fully equipped kitchen for preparing family meals, a separate living area perfect for relaxing, a luxurious whirlpool tub, convenient in-unit washer and dryer, and many floor plans feature a patio or balcony offering stunning views of the resort grounds and serene lake.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Bed className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Queen Size Bed</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Sofa className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Queen Sleeper Sofa</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <UtensilsCrossed className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Full Kitchen</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Flame className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Electric Fireplace</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Waves className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Whirlpool Tub</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Wifi className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <WashingMachine className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Washer & Dryer</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Mountain className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Patio or Balcony (Select Units)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Home className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Sleeps 4 Guests</span>
                    </div>
                  </div>

                  <div className="bg-[#FFFEF0] border border-[#FFFCE0] rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#F5E531]" />
                      Villa Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F5E531] rounded-full" />
                        Spacious layout for added privacy
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F5E531] rounded-full" />
                        Lake and resort views
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F5E531] rounded-full" />
                        Full kitchen and living area
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F5E531] rounded-full" />
                        Perfect for families or couples
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative h-64 md:h-80">
                  <img
                    src="https://jonburtondesign.com/ORLANDO/Accomodations/ResortExterior4.webp"
                    alt="Resort Exterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-teal-600 rounded-lg">
                        <Mountain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">The Resort</h3>
                    </div>
                    <p className="text-white/90 text-lg">World-Class Activities Await</p>
                  </div>
                </div>
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Located in scenic Clermont, Florida, Poconos Mountain Villas Poconos offers an unparalleled resort experience. From the moment you arrive, you'll have access to world-class activities including on-site dining, tennis courts, basketball court, the 64-acre private lake, and beautiful Florida scenery that will leave you relaxed and refreshed.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Waves className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">64-Acre Private Lake</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Utensils className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">On-Site Restaurant</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Building2 className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">On-Site Activities</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Dumbbell className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Tennis Courts</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Gamepad2 className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Basketball Court</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                      <Star className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-800 font-medium">Fitness Trail</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-teal-600" />
                      Resort Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full" />
                        Scenic Florida lakeside beauty
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full" />
                        Year-round activities for all ages
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full" />
                        Close to major theme parks
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full" />
                        On-site dining and entertainment
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </Modal>

      {/* Testimonial Lightbox */}
      <Modal
        isOpen={selectedTestimonial !== null}
        onClose={() => setSelectedTestimonial(null)}
        variant="content"
        maxWidth="max-w-lg"
      >
        {selectedTestimonial && (
          <>
            <Quote className={`absolute top-6 right-6 w-12 h-12 ${selectedTestimonial.theme === 'orange' ? 'text-[#FFFCE0]' : 'text-teal-100'}`} />
            <div className="relative z-10">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                "{selectedTestimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-semibold text-gray-900 text-lg">{selectedTestimonial.name}</p>
                <p className="text-gray-500">{selectedTestimonial.title}</p>
              </div>
            </div>
          </>
        )}
      </Modal>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
}
