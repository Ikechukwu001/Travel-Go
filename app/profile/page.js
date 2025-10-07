export default function ProfilePage() {
return (
<div className="min-h-screen bg-gray-50 p-4 pt-8 pb-20">
<h1 className="text-2xl font-semibold text-gray-800 mb-2">Profile</h1>
<p className="text-sm text-gray-500 mb-6">View and edit your II Pay account details.</p>


<div className="bg-white rounded-2xl shadow p-4 space-y-4">
<div>
<p className="text-xs text-gray-500 mb-1">Full Name</p>
<p className="font-medium text-gray-800">Michael Ikechukwu Justice</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Email</p>
<p className="font-medium text-gray-800">michaeljustice@email.com</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Phone</p>
<p className="font-medium text-gray-800">+234 812 345 6789</p>
</div>
<button className="w-full bg-green-600 text-white rounded-xl py-2 mt-4 font-medium shadow hover:bg-green-700 transition">
Edit Profile
</button>
</div>
</div>
);
}