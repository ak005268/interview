import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col pl-[220px]">
                {/* Header */}
                <header className="w-full bg-blue-500 text-white py-4 px-6 shadow-md">
                    <h1 className="text-lg font-bold">Dashboard</h1>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-4 bg-gray-100">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
