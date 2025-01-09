// Sorting.js
import React from "react";

const Sorting = ({ requestSort, sortConfig }) => {
  const getClassName = (name) => {
    if (sortConfig.key === name) {
      return sortConfig.direction === "ascending" ? "asc" : "desc";
    }
    return "";
  };

  return (
    <tr>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "date"
        )}`}
        onClick={() => requestSort("date")}
      >
        Date
      </th>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "revenue"
        )}`}
        onClick={() => requestSort("revenue")}
      >
        Revenue
      </th>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "netIncome"
        )}`}
        onClick={() => requestSort("netIncome")}
      >
        Net Income
      </th>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "grossProfit"
        )}`}
        onClick={() => requestSort("grossProfit")}
      >
        Gross Profit
      </th>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "eps"
        )}`}
        onClick={() => requestSort("eps")}
      >
        EPS
      </th>
      <th
        className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${getClassName(
          "operatingIncome"
        )}`}
        onClick={() => requestSort("operatingIncome")}
      >
        Operating Income
      </th>
    </tr>
  );
};

export default Sorting;
