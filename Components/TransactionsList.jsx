export default function TransactionsList() {
const transactions = [
{ title: 'Airtime Purchase', amount: '-₦500', time: 'Today, 9:45am' },
{ title: 'Transfer from Ikechukwu', amount: '+₦10,000', time: 'Yesterday, 5:10pm' },
{ title: 'Transfer from Fireboy', amount: '+₦10,000', time: 'Yesterday, 8:10pm' },
];
return (
<div>
<h3 className="font-semibold mb-3 text-gray-700">Recent Transactions</h3>
<div className="space-y-3">
{transactions.map((t) => (
<div key={t.title} className="flex justify-between bg-white p-3 rounded-xl shadow-sm">
<div>
<p className="text-sm font-medium">{t.title}</p>
<p className="text-xs text-gray-500">{t.time}</p>
</div>
<p className={`${t.amount.startsWith('-') ? 'text-red-500' : 'text-green-600'} font-semibold`}>
{t.amount}
</p>
</div>
))}
</div>
</div>
);
}