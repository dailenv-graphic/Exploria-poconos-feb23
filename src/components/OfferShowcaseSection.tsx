import { useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, CalendarCheck, RotateCcw, Sparkles, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface OfferShowcaseSectionProps {
  onBookNow: () => void;
}

export default function OfferShowcaseSection({ onBookNow }: OfferShowcaseSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionAnimation = useScrollAnimation();

  const showcaseImages = [
    { src: 'https://jonburtondesign.com/ORLANDO/Accomodations/LivingRoom1.webp', label: 'Living Room' },
    { src: 'https://jonburtondesign.com/ORLANDO/Accomodations/OneBedroom.png', label: 'Master Bedroom' },
    { src: 'https://jonburtondesign.com/ORLANDO/Accomodations/Kitchen1.webp', label: 'Full Kitchen' },
    { src: 'https://jonburtondesign.com/ORLANDO/Accomodations/Bathroom.webp', label: 'Spa Bathroom' },
    { src: 'https://jonburtondesign.com/ORLANDO/Accomodations/PrivateBalcony.webp', label: 'Patio or Balcony' },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? showcaseImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
  };

  const packageInclusions = [
    { icon: Moon, title: '4-Day/3-Night Condo Stay', desc: 'Poconos Mountain Villas Poconos', value: 'Up to $796' },
    { icon: Building2, title: 'On-Site Activities', desc: 'Indoor pool, recreation center & more', value: 'On-Site' },
    { icon: CalendarCheck, title: 'No Blackout Dates', desc: 'Travel by May 17, 2026', value: 'Priceless' },
    { icon: RotateCcw, title: '100% Refundable', desc: 'Get your $99 back', value: 'Risk-Free' },
  ];

  return (
    <section ref={sectionAnimation.ref as React.RefObject<HTMLElement>} className={`bg-[#F9FAFC] scroll-animate ${sectionAnimation.isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          sectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4" />
            <span>COMPLIMENTARY OWNER FEEDBACK GETAWAY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            WHAT'S INCLUDED IN YOUR <span className="text-teal-600">EXPLORIA POCONOS MOUNTAIN VILLAS VACATION</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            As an Exploria Resorts Owner, your opinion matters. Share your thoughts on our Poconos Mountain Villas renovations so we can continue creating the personalized vacation experiences you deserve.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${
          sectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {packageInclusions.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-5 sm:p-6 border-2 border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 bg-teal-50">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 leading-snug">{item.desc}</p>
              <div className="text-sm font-semibold text-gray-400">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch transition-all duration-1000 delay-300 ${
          sectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative flex flex-col">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-1 min-h-[300px] lg:min-h-0">
              <img
                src={showcaseImages[currentSlide].src}
                alt={showcaseImages[currentSlide].label}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">{showcaseImages[currentSlide].label}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{currentSlide + 1} of {showcaseImages.length}</p>
                </div>
                <div className="flex gap-2 self-end sm:self-auto">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 overflow-x-auto py-2 px-1 scrollbar-hide">
              {showcaseImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                    currentSlide === idx
                      ? 'ring-2 ring-teal-600 ring-offset-2 opacity-100'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-24 sm:w-32 aspect-[4/3] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex-1 flex flex-col">
              <div className="bg-gradient-to-r from-[#0E5E58] to-[#0E827A] p-5 sm:p-6 text-white">
                <p className="text-teal-200 text-xs sm:text-sm font-medium mb-1">Your Refundable Deposit Today:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">$99</span>
                  <span className="text-teal-200 text-xs sm:text-sm">
                    Up to <span>$796</span> Retail Value
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-gray-100">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">4-Day/3-Night Condo Stay</p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">Up to <span>$796</span></p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-gray-100">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">On-Site Activities</p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">On-Site</p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-gray-100">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">100% Refundable</p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">Risk-Free</p>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg sm:text-xl font-bold text-white">$</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-bold text-base sm:text-lg">Your Refundable Deposit Today</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Refundable after Owner Update</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Normal Rate $796</p>
                      <p className="text-2xl sm:text-3xl font-bold text-amber-600">$99</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <button
                    onClick={onBookNow}
                    className="w-full bg-[#F5E531] hover:bg-[#E5D521] text-[#222222] font-bold py-3 sm:py-4 rounded-xl transition-all shadow-lg shadow-[#F5E531]/20 hover:shadow-xl hover:shadow-[#F5E531]/30 text-base sm:text-lg"
                  >
                    RESERVE NOW
                  </button>

                  <p className="text-center text-gray-500 text-xs sm:text-sm">
                    Your Refundable Deposit Today: <span className="font-bold text-[#239D93]">$99 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
