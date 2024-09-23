"use client"

import Navbar from "@/components/Navbar";
import Topnav from "@/components/Topnav";
const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
   <div className="flex">
    <div className="hidden md:block h-screen bg-slate-800 w-72 p-2 ">
      <Navbar/>
    </div>
    <div className="w-full h-screen overflow-hidden">
      <Topnav/>
     <div className="overflow-scroll h-screen">
     {children}
     </div>
    </div>
   </div>
  );
}
 
export default DashboardLayout;