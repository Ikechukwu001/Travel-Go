export default function CardsPage() {
return (
<div className="min-h-screen bg-gray-50 p-4 pt-8 pb-20">
<h1 className="text-2xl font-semibold text-gray-800 mb-2">Cards</h1>
<p className="text-sm text-gray-500 mb-6">Manage your II Pay virtual and physical cards securely.</p>
<div className="bg-white rounded-2xl shadow-md p-4">
<p className="text-gray-700 font-medium mb-2">Virtual Card</p>
<div className="bg-green-600 text-white rounded-xl p-5">
<p className="text-sm opacity-80">Card Balance</p>
<h2 className="text-xl font-semibold">₦12,500.00</h2>
<p className="text-xs opacity-70 mt-1">**** **** **** 1234</p>
</div>
</div>
</div>
);
}