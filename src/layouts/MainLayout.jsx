import Sidebar from "./Sidebar"



const MainLayout = ({ children }) => {


    return (


        <div className="flex">
            <Sidebar />
dashboard
            {children}
        </div>
    )
}

export default MainLayout;