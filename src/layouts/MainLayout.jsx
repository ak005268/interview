import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar.jsx/SideBar";


const MainLayout =({children})=>{


    return(


        <div className="flex">
<SideBar/>

         {children}
        </div>
    )
}

export default MainLayout;