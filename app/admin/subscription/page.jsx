"use client"
import EmailTabel from '@/components/adminComponents/EmailTabel'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {
const [emailData, setEmailData] = useState([]);

const fetchEmail = async () => {
  const res = await axios.get("/api/email")
  setEmailData(res.data.emails)
  console.log(res.data.emails)
}

const deleteEmail = async (mongoId) => {
  const res = await axios.delete("/api/email",{
    params:{
      id:mongoId
    }
  })
  if(res.data.success){
    toast.success(res.data.msg);
    fetchEmail()
  }else{
    toast.error("Error")
  }
}

useEffect(()=>{
  fetchEmail()
},[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-xl font-bold'>All Subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
<table className='w-full text-sm text-gray-500  text-left'>
<thead className='text-xs text-left text-gray-700 uppercase bg-gray-100'>
  <tr>
    <th scope='col' className='px-6 py-3 '>
      Email Subscription
    </th>
    <th scope='col' className='px-6 py-3 hidden sm:block'>
      Date
    </th>
    <th scope='col' className='px-6 py-3 '>
      Action
    </th>
  </tr>
</thead>
<tbody>
  {
    emailData.map((item,index)=>{
      return  <EmailTabel emails={item} key={index} deleteEmail={deleteEmail}/>
    })
  }
 
</tbody>
</table>
      </div>
    </div>
  )
}

export default page
