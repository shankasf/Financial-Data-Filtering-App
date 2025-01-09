import React from "react";

const Sorting = ({ onSort }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("date")}
        >
          Date
        </th>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("revenue")}
        >
          Revenue
        </th>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("netIncome")}
        >
          Net Income
        </th>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("grossProfit")}
        >
          Gross Profit
        </th>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("eps")}
        >
          EPS
        </th>
        <th
          className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
          onClick={() => onSort("operatingIncome")}
        >
          Operating Income
        </th>
      </tr>
    </thead>
  );
};

export default Sorting;
