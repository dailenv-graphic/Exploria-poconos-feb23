import { Home, Gift, Ship, CreditCard, Sparkles, Waves, Bed, UtensilsCrossed, Wifi, Utensils, Building2, Play, Dumbbell, Sofa, Tv, Mountain, WashingMachine, Star, UtensilsCrossed as DiningIcon, ShoppingBag } from 'lucide-react';

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

export default function Email1Page() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[600px] shadow-2xl">
        <div className="bg-white">
          <div className="flex items-center justify-center px-4 sm:px-6 py-4 bg-white">
            <img
              src="https://jonburtondesign.com/Fire-Ice/Logo/ExploriaResorts-Logo.png"
              alt="Exploria Resorts"
              className="h-12"
            />
          </div>

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
            <p className="text-teal-900 text-3xl font-bold mb-2">It's Time to Reconnect</p>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Enjoy a <span className="font-bold text-[#0E827A]">4-Day/3-Night Condo Stay</span> + <br />A Bonus 5-Day Caribbean Cruise Voucher!
            </p>
            <p className="text-gray-600 text-base leading-relaxed">As part of the Exploria family, you're invited to experience Poconos Mountain Villas Poconos with our Owner Promotion. Bring your family, leave your worries behind, and create memories that last a lifetime.</p>
          </div>

          <div className="bg-white px-4 sm:px-6 py-8 text-center">
            <h2 className="text-xl font-semibold text-teal-700 uppercase mb-8">Your Bundle Includes Both</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-teal-600 border-4 border-white shadow-lg flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)' }}>
                  <Home className="w-10 h-10 text-white" />
                </div>
                <p className="text-teal-600 font-bold text-sm uppercase tracking-wide mb-1">Condo Stay</p>
                <p className="text-gray-800 text-sm font-semibold">4-Day/3-Night Condo Stay</p>
                <p className="text-gray-600 text-xs">Poconos Mountain Villas Poconos</p>
                <p className="text-teal-600 font-bold text-sm mt-1">Up to <span className="line-through">$796</span> Retail Value</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500 border-4 border-white shadow-lg flex items-center justify-center mx-auto mb-4" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)' }}>
                  <Ship className="w-10 h-10 text-white" />
                </div>
                <p className="text-[#F5E531] font-bold text-sm uppercase tracking-wide mb-1">Bonus Cruise</p>
                <p className="text-gray-800 text-sm font-semibold">5-Day Cruise Voucher</p>
                <p className="text-gray-600 text-xs">For Two Adults</p>
                <p className="text-[#F5E531] font-bold text-sm mt-1">Up to <span className="line-through">$1,975*</span> Retail Value</p>
              </div>
            </div>
          </div>

          <div className="py-8 bg-[#F9FAFC]">
            <div className="px-4 sm:px-6">
              <div className="text-center mb-8">
                <p className="text-teal-700 font-semibold tracking-wide uppercase text-xs mb-4">Simple Process</p>
                <h2 className="text-2xl font-bold text-teal-900 mb-4">
                  How It Works
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Three simple steps to your unforgettable Poconos getaway
                </p>
              </div>

              <div className="relative">
                <div className="hidden sm:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5">
                  <div className="h-full bg-gradient-to-r from-teal-200 via-orange-200 to-teal-200 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-teal-500 to-teal-600">
                        <Gift className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md bg-teal-700">
                        1
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold text-base mb-4">
                      Claim Your Bundle
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      4-Day condo stay plus 5-Day Caribbean cruise voucher included.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-orange-500 to-[#F5E531]">
                        <CreditCard className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md bg-[#E5D521]">
                        2
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold text-base mb-4">
                      Pay $99 Deposit
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fully refundable. Holds your dates and secures your cruise voucher.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-teal-500 to-teal-600">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md bg-teal-700">
                        3
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold text-base mb-4">
                      Show Up & Enjoy
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pack your bags and enjoy your one-bedroom condo near the parks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button className="bg-[#F5E531] text-[#222222] font-bold py-4 px-12 rounded-lg shadow-xl text-lg w-full max-w-md">
                  BOOK NOW
                </button>
                <p className="text-gray-600 text-sm mt-4">
                  Your Refundable Deposit Today: <span className="font-bold text-[#239D93]">$99 Only</span>
                </p>
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

          <div className="bg-white py-8">
            <div className="px-4 sm:px-6">
              <div className="text-center mb-8">
                <p className="text-teal-700 font-semibold tracking-wide uppercase text-xs mb-4">Your Florida "Home"</p>
                <h2 className="text-2xl font-bold text-teal-900 mb-4">
                  Stay in a Beautiful<br />One-Bedroom Condo with Full Kitchen
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src="https://jonburtondesign.com/ORLANDO/Accomodations/LivingRoom1.webp"
                  alt="Condo Interior"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <Mountain className="w-3 h-3" />
                    Patio or Balcony
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">The Condo</h3>
                <p className="text-teal-700 font-semibold mb-4">Your Personal Florida Retreat</p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Many floor plans feature a patio or balcony, perfect for enjoying the warm Florida breeze. Your One-Bedroom Condo features a fully equipped kitchen, separate living area, whirlpool tub, in-unit washer and dryer, and easy access to all resort activities.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Bed className="w-3 h-3 text-teal-600" />
                    Queen Size Bed
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <DiningIcon className="w-3 h-3 text-teal-600" />
                    Full Kitchen
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Wifi className="w-3 h-3 text-teal-600" />
                    Free WiFi
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9FAFC] py-8">
            <div className="px-4 sm:px-6">
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src="/outdoor_activities.jpg"
                  alt="Resort Pool"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <Building2 className="w-3 h-3" />
                    Resort Activities
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">The Resort</h3>
                <p className="text-teal-700 font-semibold mb-4">World-Class Activities Await</p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Located in scenic Clermont, you'll have access to six outdoor heated pools, tennis courts, basketball court, On-Site dining, fitness trail, and are located just 6.5 miles from Walt Disney World® Resort.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white px-3 py-1.5 rounded-full">
                    <Waves className="w-3 h-3 text-teal-600" />
                    Six Outdoor Heated Pools
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white px-3 py-1.5 rounded-full">
                    <Utensils className="w-3 h-3 text-teal-600" />
                    On-Site Dining
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-white px-3 py-1.5 rounded-full">
                    <Dumbbell className="w-3 h-3 text-teal-600" />
                    Tennis Courts
                  </span>
                </div>
              </div>

              <button className="bg-[#F5E531] text-white font-bold py-4 px-12 rounded-lg shadow-xl text-lg w-full max-w-md mx-auto block">
                BOOK NOW
              </button>
              <p className="text-gray-600 text-sm mt-4 text-center">
                Your Refundable Deposit Today: <span className="font-bold text-[#239D93]">$99 Only</span>
              </p>
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
                  <DiningIcon className="w-4 h-4 text-[#F5E531] flex-shrink-0" />
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

          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src="https://jonburtondesign.com/ORLANDO/Cruise/CruiseCardImage.webp"
                alt="Caribbean Cruise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F5E531] px-4 sm:px-6 py-8 w-full sm:w-1/2">
              <div className="mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full mb-4">
                  <Ship className="w-3 h-3 text-white mr-1.5" />
                  <span className="text-white font-bold text-xs tracking-wide">BONUS CRUISE</span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight">5-Day Cruise Voucher<br /><span className="text-xs font-normal">(Up to <span className="line-through">$1,975*</span> Retail Value)</span></h3>
              </div>
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Ship className="w-3.5 h-3.5" />
                The Experience
              </p>
              <p className="text-white text-sm leading-relaxed">
                Receive a voucher valid for a 5-day cruise to tropical Caribbean destinations on one of the most popular cruise lines.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="bg-teal-600 px-4 sm:px-6 py-8 w-full sm:w-1/2">
              <div className="mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full mb-4">
                  <Home className="w-3 h-3 text-white mr-1.5" />
                  <span className="text-white font-bold text-xs tracking-wide">CONDO STAY</span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight">4-Day/3-Night Condo Stay<br /><span className="text-xs font-normal">(Up to <span className="line-through">$796</span> Retail Value)</span></h3>
              </div>
              <p className="text-white text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />
                Your Florida Home
              </p>
              <p className="text-white text-sm leading-relaxed">
                Poconos Mountain Villas Poconos By Exploria Resorts. Spacious One-Bedroom Condo with full kitchen and all resort activities included.
              </p>
            </div>
            <div className="w-full sm:w-1/2 h-64 sm:h-auto">
              <img
                src="/outdoor_activities.jpg"
                alt="Resort Pool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <EmailFooter />
        </div>
      </div>
    </div>
  );
}
