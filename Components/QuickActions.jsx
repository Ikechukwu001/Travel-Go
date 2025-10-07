export default function QuickActions() {
const actions = [
{ label: 'Transfer', icon: '💸' },
{ label: 'Top-up', icon: '📱' },
{ label: 'Withdraw', icon: '🏧' },
{ label: 'History', icon: '📜' },
];
return (
<div className="grid grid-cols-4 gap-4 text-center">
{actions.map((item) => (
<button key={item.label} className="flex flex-col items-center text-sm">
<span className="text-2xl mb-1">{item.icon}</span>
{item.label}
</button>
))}
</div>
);
}