import { assets } from "@/assets/assets";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({items,deleteBlogs }) => {
    const {authorImg, title,author,date,_id} = items

    const blogdate = new Date(date);
  return (
    <>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <Image src={authorImg ? authorImg : assets.profile_icon} alt="" width={40} height={40} className="w-auto h-auto"/>
          <p>{author ? author : "No author"}</p>
        </th>
        <td className="px-6 py-4">{title ? title : "no title"}</td>
        <td className="px-6 py-4">
  { blogdate.toDateString()}
</td>
        <td className="px-6 py-4 cursor-pointer text-2xl" onClick={()=> deleteBlogs(_id)}><X /></td>
      </tr>
    </>
  );
};

export default BlogTableItem;
