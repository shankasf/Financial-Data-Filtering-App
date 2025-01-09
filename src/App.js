import React, { useState, useEffect } from "react";
import axios from "axios";
import Filtering from "./Filtering";
import FinancialTable from "./FinancialTable";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    startYear: "",
    endYear: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
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

  const handleFilterChange = (filters) => {
    setFilters(filters);
  };

  const filteredData = data.filter((item) => {
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

  return (
    <div className="App bg-gray-50 min-h-screen">
      <header className="App-header text-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">Financial Data Filtering App</h1>
        <p className="text-sm text-gray-600">Data Table</p>
      </header>

      <main className="p-6">
        <Filtering onFilterChange={handleFilterChange} />
        <FinancialTable data={filteredData} loading={loading} />
      </main>
    </div>
  );
};

export default App;
