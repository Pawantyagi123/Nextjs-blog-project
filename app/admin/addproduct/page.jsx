"use client";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Pawan",
    authorImg: "/authorImg.png"
  })

  const onChangehandler = (e)=>{
const name = e.target.name;
const value = e.target.value;
setData(data=> ({...data,[name]: value}))
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault(); 
    setLoading(true)  //prevent form refresh
    const formData = new FormData();
    formData.append("title",data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg",data.authorImg);
    formData.append("image",image);
    
    const res = await axios.post("/api/blog",formData);
    if(res.data.success){
      toast.success(res.data.msg)
      console.log(res.data)
    setLoading(false)
    setData({
      title: "",
      description: "",
      category: "Startup",
      author: "Pawan",
      authorImg: "/authorImg.png"
    });
    setImage(false);
    }else{
      toast.error("Error")
      setLoading(false)
    }
  };

  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16" onSubmit={onSubmitHandler}>
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
            className="mt-4 w-auto h-auto"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Blog title</p>
        <input
        name="title"
          type="text"
          onChange={onChangehandler}
          value={data.title}
          placeholder="Type Here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />

        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          type="text"
          name="description"
          onChange={onChangehandler}
          value={data.description}
          placeholder="write content here"
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select name="category" className="w-40 mt-4 px-4 py-3 border text-gray-500"  onChange={onChangehandler} value={data.category}>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br/>
        {
          loading ?  <Button type="submit" className={"mt-8 w-40 h-12"}><Loader className="animate-spin"/>ADD</Button> : <Button type="submit" className={"mt-8 w-40 h-12"}>ADD</Button>
        }
        
      </form>
    </>
  );
};

export default page;
