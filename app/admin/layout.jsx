import { assets } from "@/assets/assets";
import AdminSidebar from "@/components/adminComponents/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <ToastContainer theme="dark"/>
        {/* Sidebar */}
        <AdminSidebar />
        <SidebarTrigger />
        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Top Navbar */}
          <div className="flex items-center justify-between w-full py-3 px-12 border-b border-black max-h-[60px]">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} alt="Profile Icon" width={40} height={40} />
          </div>

          {/* Page Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>

      {/* Sidebar Trigger (optional, if you need floating button) */}
    </SidebarProvider>
  );
}
