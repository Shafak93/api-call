import React from "react";

const Company = ({ company }) => {
  const { name, email, status } = company;
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">
          <input type="checkbox" />
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">{name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{email}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">{status}</div>
      </td>
    </tr>
  );
};

export default Company;
