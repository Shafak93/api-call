import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Company from "./Company";
import getData from "./Loading/getData";

const Companies = () => {
  const { data } = useQuery("data", () => getData());
  return (
    <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Companies</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left"></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data.map((company) => (
                    <Company company={company}></Company>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
