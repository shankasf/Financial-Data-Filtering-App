import React from "react";

const Sorting = ({ requestSort, sortConfig }) => {
  const getSortClass = (column) => {
    return sortConfig.key === column
      ? sortConfig.direction === "ascending"
        ? "text-blue-600"
        : "text-red-600"
      : "text-gray-600";
  };

  return (
    <thead className="bg-gray-100">
      <tr>
        <th
          onClick={() => requestSort("date")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "date"
          )}`}
        >
          Date
        </th>
        <th
          onClick={() => requestSort("revenue")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "revenue"
          )}`}
        >
          Revenue
        </th>
        <th
          onClick={() => requestSort("netIncome")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "netIncome"
          )}`}
        >
          Net Income
        </th>
        <th
          onClick={() => requestSort("grossProfit")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "grossProfit"
          )}`}
        >
          Gross Profit
        </th>
        <th
          onClick={() => requestSort("eps")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "eps"
          )}`}
        >
          EPS
        </th>
        <th
          onClick={() => requestSort("operatingIncome")}
          className={`cursor-pointer px-6 py-3 text-left text-sm font-semibold ${getSortClass(
            "operatingIncome"
          )}`}
        >
          Operating Income
        </th>
      </tr>
    </thead>
  );
};

export default Sorting;
