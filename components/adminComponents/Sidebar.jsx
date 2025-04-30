import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Sidebar, SidebarHeader } from "../ui/sidebar";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <>
      <Sidebar>
      <SidebarHeader>
        <Link href={"/"} className="px-2 sm:pl-14 py-3">
          <Image src={assets.logo} width={120} alt="" />
        </Link>
        </SidebarHeader>
        <div className="border border-black py-12 h-[100vh]">
            <div className="w-[50%] sm:w-[80%] absolute right-0">
            <Link href={"/admin/addproduct"} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.add_icon} width={28} alt="" />
            <p>Add Blogs</p>
          </Link>
          <Link href={"/admin/blogList"} className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.blog_icon} width={28} alt="" />
            <p>Blog Lists</p>
          </Link>
          <Link href={"/admin/subscription"} className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
            <Image src={assets.email_icon} width={28} alt="" />
            <p>Subscription</p>
          </Link>
            </div>
        </div>
      </Sidebar>
    </>
  );
};

export default AdminSidebar;
