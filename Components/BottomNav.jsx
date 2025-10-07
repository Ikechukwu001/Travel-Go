export default function BottomNav() {
const navItems = [
{ label: 'Home', icon: '🏠' },
{ label: 'Rewards', icon: '🎁' },
{ label: 'Cards', icon: '💳' },
{ label: 'Profile', icon: '👤' },
];
return (
<nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t flex justify-around py-2">
{navItems.map((item) => (
<button key={item.label} className="flex flex-col items-center text-xs text-gray-600">
<span className="text-lg">{item.icon}</span>
{item.label}
</button>
))}
</nav>
);
}