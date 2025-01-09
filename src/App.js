import React, { useState } from "react";
import Filtering from "./Filtering";
import FinancialTable from "./FinancialTable";

const App = () => {
  const [filters, setFilters] = useState({
    startYear: "",
    endYear: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
  });

  const handleFilterChange = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      <header className="App-header text-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">Financial Data Filtering App</h1>
        <p className="text-sm text-gray-600">Data Table</p>
      </header>

      <main className="p-6">
        <Filtering onFilterChange={handleFilterChange} filters={filters} />
        <FinancialTable filters={filters} />
      </main>
    </div>
  );
};

export default App;
