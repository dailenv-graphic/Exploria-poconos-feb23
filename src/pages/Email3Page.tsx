import { Home, Calendar, Ship, DollarSign, Star, Waves, Bed, UtensilsCrossed, Wifi, Utensils, Play, Dumbbell, Sofa, Tv, WashingMachine, ShoppingBag } from 'lucide-react';

function EmailHeader() {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-4 bg-white">
      <img
        src="https://jonburtondesign.com/Fire-Ice/Logo/ExploriaResorts-Logo.png"
        alt="Exploria Resorts"
        className="h-12"
      />
    </div>
  );
}

function EmailFooter() {
  return (
    <div className="bg-white px-4 sm:px-6 py-8 text-center border-t border-gray-200">
      <img
        src="https://jonburtondesign.com/Fire-Ice/Logo/ExploriaResorts-Logo.png"
        alt="Exploria Resorts"
        className="h-10 mx-auto mb-4"
      />
      <p className="text-gray-700 text-xs leading-relaxed mb-3 font-medium">
        The vacation package being offered is provided By Club Exploria, LLC, the developer and seller of Club Exploria, a multi-site timeshare plan. &copy; 2025 Club Exploria, LLC. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs leading-relaxed mb-3">
        Full details and complete terms and conditions for redemption of the cruise voucher are printed on the promotional certificate which will be emailed directly to you. Fulfillment of the cruise voucher is the sole and exclusive obligation of Customer Service Network Group ("CSNG") which is not affiliated with Exploria Resorts.
      </p>
      <p className="text-gray-700 text-xs leading-relaxed mb-3 uppercase tracking-wide font-semibold">
        This advertising material is being used for the purpose of soliciting sales of a vacation ownership plan.
      </p>
      <p className="text-gray-700 text-xs leading-relaxed mb-3 uppercase tracking-wide font-semibold">
        The complete offering terms are contained in a public offering plan available from the sponsor.
      </p>
      <p className="text-gray-600 text-xs leading-relaxed mb-3">
        *Retail value based on travel dates selected and cruise voucher.
      </p>
      <div className="flex items-center justify-center gap-4 text-xs mb-4">
        <a href="#" className="text-gray-600 underline font-medium">Terms & Conditions</a>
        <span className="text-gray-400">|</span>
        <a href="#" className="text-gray-600 underline font-medium">Privacy Policy</a>
      </div>
      <p className="text-gray-600 text-xs leading-relaxed italic">
        All Disney names and logos are registered trademarks of Disney Enterprises, Inc. Universal elements and all related indicia TM & &copy; 2026 Universal Studios. Jurassic Park TM & &copy; 2026 Universal City Studios LLC and Amblin Entertainment, Inc. This promotion is not affiliated with, endorsed by, or sponsored by The Walt Disney Company or Universal Studios.
      </p>
    </div>
  );
}

export default function Email3Page() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[600px] shadow-2xl">
        <div className="bg-white">
          <EmailHeader />

          <div
            className="relative py-12 px-6 flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: 'url(https://jonburtondesign.com/ORLANDO/ThingsToDo/EmailHero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1a1a2e'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            <div className="relative z-10">
              <img
                src="https://jonburtondesign.com/ORLANDO/Sticker.png"
                alt="Exploria Resorts Owner Promotion Offer"
                className="mx-auto h-32 mb-4"
              />
              <p className="text-white text-2xl font-bold leading-tight">
                Your Poconos Condo Stay<br />& Bonus Caribbean Cruise
              </p>
              <p className="text-white text-lg mt-4 max-w-sm">
                4-Day/3-Night Stay in a spacious<br />One-Bedroom Condo with full kitchen.
              </p>
            </div>
          </div>

          <div className="flex justify-center py-6">
            <img
              src="/summerbayorlandologo.png"
              alt="Poconos Mountain Villas Poconos"
              className="h-32"
            />
          </div>

          <div className="px-4 sm:px-6 py-8 text-center">
            <h2 className="text-2xl font-bold text-teal-900 mb-4">Disconnect from the World.<br />Reconnect with Each Other.</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              The Florida sun is calling. Step away from the everyday and into a spacious condo retreat where the only agenda is quality time with the people you love. Your Poconos escape awaits.
            </p>
          </div>

          <div className="px-4 sm:px-6">
            <img
              src="https://jonburtondesign.com/ORLANDO/Accomodations/LivingRoom1.webp"
              alt="Condo Living Room"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>

          <div className="px-4 sm:px-6 py-8">
            <h3 className="text-xl font-semibold text-teal-900 text-center mb-8">What's Included:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0E5E58] flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">4-Day/3-Night Condo Stay</p>
                <p className="text-gray-600 text-xs">Up to <span className="line-through">$796</span> Retail Value</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0E5E58] flex items-center justify-center mx-auto mb-4">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">5-Day Cruise Voucher</p>
                <p className="text-gray-600 text-xs">Up to <span className="line-through">$1,975*</span> Retail Value</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0E5E58] flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Flexible Dates</p>
                <p className="text-gray-600 text-xs">Valid through March 2026</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0E5E58] flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Refundable Deposit</p>
                <p className="text-gray-600 text-xs">Get your $99 back after Owner Update</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-[#F5E531] text-[#222222] font-bold py-4 px-12 rounded-lg shadow-xl text-lg w-full max-w-md">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-8 bg-white">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Things To Do</h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Utensils className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Onsite Bar & Restaurant</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Star className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Theme Parks</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Waves className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Water Parks</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Waves className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Six Outdoor Heated Pools</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <ShoppingBag className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Shopping</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Play className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Tennis Courts</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Play className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Basketball Court</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Dumbbell className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Fitness Trail</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">One Bedroom Condo</h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Bed className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Queen Bed</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <UtensilsCrossed className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Dining Room</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Sofa className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Sofa Bed</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Tv className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Living Room</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Utensils className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Full Kitchen</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Home className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Sleeps 4 Guests</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <Wifi className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Free WiFi</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-2">
                  <WashingMachine className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">Washer & Dryer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-8">
            <div className="bg-[#0E5E58] rounded-xl px-4 sm:px-6 py-6 flex flex-col items-center gap-5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-11 sm:h-11 bg-white/10 rounded-xl flex items-center justify-center mb-2">
                    <Home className="w-7 h-7 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-white font-semibold text-base sm:text-sm">4-Day/3-Night Condo Stay</p>
                  <p className="text-white/70 text-sm sm:text-xs">Up to <span className="line-through">$796</span> Retail Value</p>
                </div>

                <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl sm:text-lg">+</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-11 sm:h-11 bg-white/10 rounded-xl flex items-center justify-center mb-2">
                    <Ship className="w-7 h-7 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-white font-semibold text-base sm:text-sm">5-Day Cruise Voucher</p>
                  <p className="text-white/70 text-sm sm:text-xs">Up to <span className="line-through">$1,975*</span> Retail Value</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/20"></div>

              <div className="text-center">
                <p className="text-white/70 text-sm sm:text-xs mb-1">Total Package Up to <span className="line-through">$2,771*</span> Retail Value</p>
                <p className="text-white text-3xl sm:text-2xl font-bold">Your Price: <span className="text-[#F5E531]">$99</span></p>
                <p className="text-white/70 text-sm sm:text-xs mt-1">Refundable Deposit</p>
              </div>

              <button className="bg-[#F5E531] text-[#222222] font-bold py-4 px-12 rounded-lg shadow-xl text-lg w-full max-w-md">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="bg-white py-8 px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">
                Explore Poconos
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Discover world-famous theme parks, shopping, dining, and endless fun located just 6.5 miles from Walt Disney World® Resort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative rounded-xl overflow-hidden h-48">
                <img
                  src="/outdoor_activities.jpg"
                  alt="Resort Pool"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Waves className="w-4 h-4 text-white" />
                    <h3 className="text-sm font-bold text-white">Six Outdoor Heated Pools</h3>
                  </div>
                  <p className="text-xs text-white/90">Six outdoor heated pools with splash pads for the kids.</p>
                </div>
              </div>

              <div className="row-span-2 relative rounded-xl overflow-hidden h-full min-h-[300px]">
                <img
                  src="https://jonburtondesign.com/ORLANDO/Cruise/CruiseCardImage.webp"
                  alt="Caribbean Cruise"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Ship className="w-4 h-4 text-white" />
                    <h3 className="text-sm font-bold text-white">Caribbean Cruise</h3>
                  </div>
                  <p className="text-xs text-white/90">5-Day cruise voucher included with your stay.</p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden h-36">
                <img
                  src="https://jonburtondesign.com/ORLANDO/ThingsToDo/DisneyImage1.webp"
                  alt="Theme Parks"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Star className="w-3 h-3 text-white" />
                    <h3 className="text-xs font-bold text-white">Theme Parks</h3>
                  </div>
                  <p className="text-[10px] text-white/90">World-famous attractions nearby</p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden h-36">
                <img
                  src="https://jonburtondesign.com/ORLANDO/ThingsToDo/OutletsImage.webp"
                  alt="Shopping"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <ShoppingBag className="w-3 h-3 text-white" />
                    <h3 className="text-xs font-bold text-white">Shopping & Dining</h3>
                  </div>
                  <p className="text-[10px] text-white/90">Premium outlets nearby</p>
                </div>
              </div>

              </div>
          </div>

          <div className="px-4 sm:px-6 py-8 text-center bg-white">
            <button className="bg-[#F5E531] text-[#222222] font-bold py-4 px-12 rounded-lg shadow-xl text-lg w-full max-w-md">
              BOOK NOW
            </button>
            <p className="text-gray-600 text-sm mt-4">
              Your Refundable Deposit Today: <span className="font-bold text-[#239D93]">$99 Only</span>
            </p>
          </div>

          <EmailFooter />
        </div>
      </div>
    </div>
  );
}
