import React, { useState, useEffect } from "react";
import axios from "axios";
import Sorting from "./Sorting";

const FinancialTable = ({ filters }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "descending",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v3/income-statement/AAPL?apikey=lKo5PN8uqRIGDkgiVmqZGpUbcS0xMoJW"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) => {
    const year = new Date(item.date).getFullYear();
    return (
      (!filters.startYear || year >= filters.startYear) &&
      (!filters.endYear || year <= filters.endYear) &&
      (!filters.minRevenue || item.revenue >= filters.minRevenue) &&
      (!filters.maxRevenue || item.revenue <= filters.maxRevenue) &&
      (!filters.minNetIncome || item.netIncome >= filters.minNetIncome) &&
      (!filters.maxNetIncome || item.netIncome <= filters.maxNetIncome)
    );
  });

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <Sorting requestSort={requestSort} sortConfig={sortConfig} />
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((item) => (
            <tr key={item.date} className="text-sm">
              <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.revenue}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.netIncome}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.grossProfit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.eps}</td>
              <td className="px-6 py-4 whitespace-nowrap">
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
