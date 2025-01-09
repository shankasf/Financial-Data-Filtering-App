import React, { useState, useEffect } from "react";

const Filtering = ({ onFilterChange, filters }) => {
  const [filterValues, setFilterValues] = useState(filters);

  useEffect(() => {
    setFilterValues(filters);
  }, [filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filterValues, [name]: value };
    setFilterValues(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-container flex flex-wrap gap-4">
      <div className="filter-item flex items-center">
        <label htmlFor="startYear" className="mr-2">
          Start Year
        </label>
        <input
          type="number"
          id="startYear"
          name="startYear"
          value={filterValues.startYear}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-item flex items-center">
        <label htmlFor="endYear" className="mr-2">
          End Year
        </label>
        <input
          type="number"
          id="endYear"
          name="endYear"
          value={filterValues.endYear}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-item flex items-center">
        <label htmlFor="minRevenue" className="mr-2">
          Min Revenue
        </label>
        <input
          type="number"
          id="minRevenue"
          name="minRevenue"
          value={filterValues.minRevenue}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-item flex items-center">
        <label htmlFor="maxRevenue" className="mr-2">
          Max Revenue
        </label>
        <input
          type="number"
          id="maxRevenue"
          name="maxRevenue"
          value={filterValues.maxRevenue}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-item flex items-center">
        <label htmlFor="minNetIncome" className="mr-2">
          Min Net Income
        </label>
        <input
          type="number"
          id="minNetIncome"
          name="minNetIncome"
          value={filterValues.minNetIncome}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-item flex items-center">
        <label htmlFor="maxNetIncome" className="mr-2">
          Max Net Income
        </label>
        <input
          type="number"
          id="maxNetIncome"
          name="maxNetIncome"
          value={filterValues.maxNetIncome}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="filter-info mt-4 text-gray-600">
        <p>
          <strong>Current Filters:</strong>
        </p>
        <p>
          {filterValues.startYear && `Start Year: ${filterValues.startYear}, `}
          {filterValues.endYear && `End Year: ${filterValues.endYear}, `}
          {filterValues.minRevenue &&
            `Min Revenue: ${filterValues.minRevenue}, `}
          {filterValues.maxRevenue &&
            `Max Revenue: ${filterValues.maxRevenue}, `}
          {filterValues.minNetIncome &&
            `Min Net Income: ${filterValues.minNetIncome}, `}
          {filterValues.maxNetIncome &&
            `Max Net Income: ${filterValues.maxNetIncome}`}
        </p>
      </div>
    </div>
  );
};

export default Filtering;
