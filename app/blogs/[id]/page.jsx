"use client";
import { assets } from "@/assets/assets";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/navbar";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const id = React.use(params)

  const fetchData = async() => {
    try {
      const res = await axios.get("/api/blog",{
        params:{
          id:id
        }
      })
  
      setData(res.data.blogs[0])
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return ( data ?  <>
  <Navbar/>
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image src={data.authorImg} width={60} height={60} alt="" className="mx-auto mt-6 border border-white rounded-full"/>
        <p className=" mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} width={1280} height={720} alt="" className="border-4 border-white "/>
        <div className="blog-contain" dangerouslySetInnerHTML={{__html:data.description}}></div>
        
        <div className="my-24 ">
      <p className="text-black font-semibold my-4">Share this article on social media</p>
       <div className="flex">
       <Image  src={assets.facebook_icon} width={50} alt=""/>
       <Image  src={assets.twitter_icon} width={50} alt=""/>
       <Image  src={assets.googleplus_icon} width={50} alt=""/>
       </div>
        </div>
      </div>
      <Footer/>
    </> : <></>
  );
};

export default page;
