import React from "react";

const FinancialTable = ({ data, loading }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Revenue
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Net Income
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Gross Profit
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              EPS
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Operating Income
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.date} className="hover:bg-gray-100">
              <td className="px-4 py-2 text-sm text-gray-600">{item.date}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {item.revenue}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {item.netIncome}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {item.grossProfit}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">{item.eps}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {item.operatingIncome}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
