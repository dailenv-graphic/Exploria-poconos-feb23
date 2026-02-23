import { Home, Ship, Users, MapPin, Star, Waves, Bed, UtensilsCrossed, Wifi, Utensils, Play, Dumbbell, Sofa, Tv, WashingMachine, ShoppingBag } from 'lucide-react';

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

export default function Email2Page() {
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

          <div className="bg-[#F9FAFC] px-4 sm:px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-teal-900 mb-4">
                Your Bundle Includes Both
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">Condo stay plus cruise voucher in one amazing package</p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                  <span className="text-gray-600 font-bold text-xs">+</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-4 text-white">
                <div className="px-2 py-0.5 bg-white/30 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
                  Condo Stay
                </div>
                <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold mb-1">4-Day/3-Night Condo Stay</h3>
                <p className="text-white/90 text-xs">Up to <span className="line-through">$796</span> Retail Value</p>
              </div>

              <div className="sm:hidden flex justify-center py-2">
                <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                  <span className="text-gray-600 font-bold text-xs">+</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-[#F5E531] rounded-xl p-4 text-white">
                <div className="px-2 py-0.5 bg-white/30 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
                  Bonus Cruise
                </div>
                <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                  <Ship className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold mb-1">5-Day Cruise Voucher</h3>
                <p className="text-white/90 text-xs">Up to <span className="line-through">$1,975*</span> Retail Value</p>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-8 text-center">
            <h2 className="text-xl font-semibold text-teal-900 mb-4">One Getaway. Double the Memories.</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Your Poconos condo stay comes with a bonus Caribbean cruise voucher. Experience Florida now, cruise later.
            </p>
          </div>

          <div className="px-4 sm:px-6 space-y-4">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://jonburtondesign.com/ORLANDO/Cruise/CruiseCardImage.webp"
                alt="Caribbean Cruise"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-orange-500 rounded-full">
                  <Ship className="w-3 h-3 text-white mr-1.5" />
                  <span className="text-white font-bold text-xs tracking-wide">BONUS CRUISE</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-1">5-Day Cruise Voucher</h3>
                <p className="text-white/90 text-sm mb-3">Up to <span className="font-bold text-[#FFF9C1] line-through">$1,975*</span> Retail Value</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Ship className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">5-Day Cruise</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Users className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">For Two Adults</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <MapPin className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">Caribbean Ports</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/outdoor_activities.jpg"
                alt="Poconos Mountain Villas Poconos Resort"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-teal-600 rounded-full">
                  <Home className="w-3 h-3 text-white mr-1.5" />
                  <span className="text-white font-bold text-xs tracking-wide">CONDO STAY</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-1">4-Day/3-Night Condo Stay</h3>
                <p className="text-white/90 text-sm mb-3">Up to <span className="font-bold text-teal-300 line-through">$796</span> Retail Value</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Home className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">Full Kitchen</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Users className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">Sleeps 4</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <MapPin className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">Near Theme Parks</span>
                  </div>
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

          <EmailFooter />
        </div>
      </div>
    </div>
  );
}
