import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (

        <div className="flex h-screen">

            <div className="bg-red-400 flex-1">

                <h1> Sidebar  </h1>

            </div>

            <div className="bg-green-400 flex-[3]">
                <Outlet/>
            </div>
            
        </div>

        

    );
};

export default AdminLayout;