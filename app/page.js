import WalletCard from '@/Components/WalletCard';
import QuickActions from '@/Components/QuickActions';
import ServicesGrid from '@/Components/ServicesGrid';
import TransactionsList from '@/Components/TransactionsList';
import BottomNav from '@/Components/BottomNav';


export default function OpayInspiredPage() {
return (
<div className="min-h-screen bg-gray-50 pb-20">
<div className="p-4 space-y-6">
<WalletCard />
<QuickActions />
<ServicesGrid />
<TransactionsList />
</div>
<BottomNav />
</div>
);
}