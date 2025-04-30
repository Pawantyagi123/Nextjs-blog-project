"use client";
import React, { useEffect, useState } from "react";
import BlogItems from "../blogItems/BlogItems";
import { blog_data } from "@/assets/assets";
import axios from "axios";

const BlogList = () => {
const [menu, setMenu] = useState("All");
const [blogs, setBlogs] = useState([])

const fetchBlogs = async () =>{
  const res = await axios.get("/api/blog");
  setBlogs(res.data.blogs);
console.log(res.data.blogs)
}

useEffect(()=>{
fetchBlogs()
},[])

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className={menu=== "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""} onClick={()=> setMenu("All")}>
          All
        </button>
        <button onClick={()=> setMenu("Technology")} className={menu=== "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Technology</button>
        <button onClick={()=> setMenu("Startup")} className={menu=== "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Startup</button>
        <button onClick={()=> setMenu("Lifestyle")} className={menu=== "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Lifestyle</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
          {
            blogs.filter((item)=> menu === "All" ? true : item.category === menu).map((items,index)=>{
  return <BlogItems key={index} image={items.image} title={items.title} description={items.description} category={items.category} id={items._id}/>
            })
          }
      </div>
    </div>
  );
};

export default BlogList;
