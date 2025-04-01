import Sidebar from "./Sidebar"



const MainLayout = ({ children }) => {


    return (


        <div className="flex">
            <Sidebar />

            {children}
        </div>
    )
}

export default MainLayout;