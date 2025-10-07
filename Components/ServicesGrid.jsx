import { Phone, Wifi, Gamepad2, Tv, Zap, HandCoins, PiggyBank, Gift } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    { name: 'Airtime', icon: <Phone className="w-5 h-5 text-green-600" /> },
    { name: 'Data', icon: <Wifi className="w-5 h-5 text-green-600" /> },
    { name: 'Betting', icon: <Gamepad2 className="w-5 h-5 text-green-600" /> },
    { name: 'TV', icon: <Tv className="w-5 h-5 text-green-600" /> },
    { name: 'Electricity', icon: <Zap className="w-5 h-5 text-green-600" /> },
    { name: 'Loans', icon: <HandCoins className="w-5 h-5 text-green-600" /> },
    { name: 'Savings', icon: <PiggyBank className="w-5 h-5 text-green-600" /> },
    { name: 'Rewards', icon: <Gift className="w-5 h-5 text-green-600" /> },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-3 text-gray-700">Services</h3>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.name} className="flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-xl mb-1 flex items-center justify-center">
              {service.icon}
            </div>
            <p className="text-xs">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}