import { Users, FileText, TrendingUp, Monitor } from "lucide-react";

const Dashboard = () => {
    // Example Data
    const stats = [
        {
            id: 1,
            title: "Total Users",
            value: "2,000",
            change: "+20%",
            icon: <Users size={28} className="text-blue-700" />,
            bgColor: "bg-blue-100",
        },
        {
            id: 2,
            title: "Total Posts",
            value: "1,000",
            change: "+15%",
            icon: <FileText size={28} className="text-green-700" />,
            bgColor: "bg-green-100",
        },
        {
            id: 3,
            title: "Engagement Rate",
            value: "75%",
            change: "+10%",
            icon: <TrendingUp size={28} className="text-purple-700" />,
            bgColor: "bg-purple-100",
        },
        {
            id: 4,
            title: "Active Sessions",
            value: "120",
            change: "+5%",
            icon: <Monitor size={28} className="text-red-700" />,
            bgColor: "bg-red-100",
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

            {/* Responsive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`flex items-center justify-between p-6 rounded-2xl shadow-md ${stat.bgColor}`}
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{stat.title}</h3>
                            <p className="text-3xl font-bold">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.change} last month</p>
                        </div>
                        <div className="p-3 rounded-full bg-white shadow">{stat.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
