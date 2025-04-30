import { X } from "lucide-react";
import React from "react";

const EmailTabel = ({ emails,deleteEmail }) => {
  const {date,email,_id} = emails
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hidden sm:table-cell"
    >
      {email ? email : "No email"}
    </th>
    <td className="px-6 py-4 hidden sm:table-cell">{emailDate.toDateString()}</td>
    <td className="px-6 py-4 cursor-pointer text-2xl" onClick={()=> deleteEmail(_id)}><X /></td>
  </tr>
  
  );
};

export default EmailTabel;
