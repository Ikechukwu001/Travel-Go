export default function WalletCard() {
return (
<div className="bg-green-600 text-white rounded-2xl p-5 shadow-md">
<div className="flex justify-between items-center mb-3">
<p className="text-sm opacity-80">Total Balance</p>
<button className="text-xs bg-white/20 px-3 py-1 rounded-full">Add Money</button>
</div>
<h2 className="text-3xl font-semibold">₦25,800.00</h2>
<p className="text-xs mt-1 opacity-80">Account No: 1234567890</p>
</div>
);
}