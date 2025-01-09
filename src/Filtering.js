import React, { useState } from "react";

const Filtering = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    startYear: "",
    endYear: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center">
          <label
            htmlFor="startYear"
            className="text-sm font-medium text-gray-600"
          >
            Start Year
          </label>
          <input
            id="startYear"
            type="number"
            name="startYear"
            value={filters.startYear}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="endYear"
            className="text-sm font-medium text-gray-600"
          >
            End Year
          </label>
          <input
            id="endYear"
            type="number"
            name="endYear"
            value={filters.endYear}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="minRevenue"
            className="text-sm font-medium text-gray-600"
          >
            Min Revenue
          </label>
          <input
            id="minRevenue"
            type="number"
            name="minRevenue"
            value={filters.minRevenue}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="maxRevenue"
            className="text-sm font-medium text-gray-600"
          >
            Max Revenue
          </label>
          <input
            id="maxRevenue"
            type="number"
            name="maxRevenue"
            value={filters.maxRevenue}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="minNetIncome"
            className="text-sm font-medium text-gray-600"
          >
            Min Net Income
          </label>
          <input
            id="minNetIncome"
            type="number"
            name="minNetIncome"
            value={filters.minNetIncome}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="maxNetIncome"
            className="text-sm font-medium text-gray-600"
          >
            Max Net Income
          </label>
          <input
            id="maxNetIncome"
            type="number"
            name="maxNetIncome"
            value={filters.maxNetIncome}
            onChange={handleFilterChange}
            className="ml-2 p-2 border rounded-md w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Filtering;
