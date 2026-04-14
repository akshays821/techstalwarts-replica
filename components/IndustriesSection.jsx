import { 
  HeartPulse, Share2, Tv, Plane, Calendar, Utensils, 
  ShoppingBag, Cloud, Gamepad2, Landmark, Vote, Heart, 
  Home, GraduationCap, Newspaper, Truck, PlaneTakeoff, 
  Leaf, CarFront, Coins, Factory
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "Social Networking", icon: Share2 },
    { name: "Entertainment", icon: Tv },
    { name: "Travel", icon: Plane },
    { name: "Events", icon: Calendar },
    { name: "Restaurant", icon: Utensils },
    { name: "Ecommerce", icon: ShoppingBag },
    { name: "SaaS", icon: Cloud },
    { name: "Game App", icon: Gamepad2 },
    { name: "Finance", icon: Landmark },
    { name: "Politics", icon: Vote },
    { name: "Wellness", icon: Heart },
    { name: "Real Estate", icon: Home },
    { name: "Education", icon: GraduationCap },
    { name: "News", icon: Newspaper },
    { name: "Logistics", icon: Truck },
    { name: "Aviation", icon: PlaneTakeoff },
    { name: "Agriculture", icon: Leaf },
    { name: "EV", icon: CarFront },
    { name: "Fintech", icon: Coins },
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[#E8192C] font-medium text-sm mb-2">
            <Factory size={20} strokeWidth={1.5} />
            <span className="uppercase tracking-wider text-gray-500 font-semibold text-xs">Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Industries we&apos;ve worked for
          </h2>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-4 min-w-max pb-2">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow w-[200px] h-[160px] shrink-0"
              >
                <div className="text-[#E8192C]">
                  <ind.icon size={36} strokeWidth={1.5} />
                </div>
                <span className="text-gray-600 font-medium text-center text-sm md:text-base">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
