import { Calendar, DollarSign, Handshake, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HowItWorksSectionProps {
  onBookNow: () => void;
}

const steps = [
  {
    number: 1,
    title: 'SELECT DATES',
    description: 'Choose your preferred travel dates before May 17, 2026',
    icon: Calendar,
    accent: 'teal',
  },
  {
    number: 2,
    title: 'REFUNDABLE DEPOSIT',
    description: 'Place a $99 refundable deposit to secure your getaway',
    icon: DollarSign,
    accent: 'orange',
  },
  {
    number: 3,
    title: 'FEEDBACK SESSION',
    description: 'Join a 60-min Owner Feedback Session during your getaway',
    icon: Handshake,
    accent: 'teal',
  },
];

export default function HowItWorksSection({ onBookNow }: HowItWorksSectionProps) {
  const sectionAnimation = useScrollAnimation();

  return (
    <section ref={sectionAnimation.ref as React.RefObject<HTMLElement>} id="how-it-works" className={`pt-20 md:pt-28 pb-0 bg-white relative overflow-hidden scroll-animate ${sectionAnimation.isVisible ? 'visible' : ''}`}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFFEF0] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Four simple steps to your unforgettable Poconos getaway
          </p>
        </div>

        <div className="relative mb-16">
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5">
            <div className="h-full bg-gradient-to-r from-teal-200 via-[#FFF9C1] to-teal-200 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              const isTeal = step.accent === 'teal';

              return (
                <div key={step.number} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                        isTeal
                          ? 'bg-gradient-to-br from-teal-500 to-teal-600'
                          : 'bg-gradient-to-br from-[#F5E531] to-[#F5E531]'
                      }`}>
                        <Icon className="w-9 h-9 text-white" />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md ${
                        isTeal ? 'bg-teal-700' : 'bg-[#E5D521]'
                      }`}>
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-gray-900 font-bold text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-t-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: 'url(/drone_poconos.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          <div className="relative flex flex-col items-center justify-end p-8 md:p-12 min-h-[400px] gap-6">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl max-w-3xl w-full">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#F5E531] to-[#F5E531]">
                    <Sparkles className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md bg-[#E5D521]">
                    4
                  </div>
                </div>

                <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
                  THEN, JUST ENJOY YOUR GETAWAY
                </h3>
                <p className="text-white/95 text-base md:text-lg leading-relaxed">
                  That's it! The rest of your complimentary resort getaway is yours to enjoy! Your $99 deposit will be refunded after attending the Owner Feedback Session. Plus, you'll receive a voucher for a future 7-night resort vacation redeemable at over 50 resorts across the US, Canada, Mexico and the Caribbean!
                </p>
              </div>
            </div>

            <button
              onClick={onBookNow}
              className="group bg-[#F5E531] text-[#222222] px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#E5D521] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
