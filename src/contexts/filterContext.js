// In this folder I will change redux to contexts

import { useContext, createContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

// Jeśli mamy zagnieżdżenie providerów, to chcemy kolejne załączyć, więc używamy children
export const FilterProvider = ({ children }) => {
  const statusFilters = Object.freeze({
    all: "all",
    active: "active",
    completed: "completed",
  });

  const [status, setStatus] = useState(statusFilters.all);

  //   const getStatus = () => {
  //     return status;
  //   };

  return (
    // In every context I will need children, so I use it and need actual status, so declare it as value
    // It's better to create function, becouse if I will one time need change for example status + 2, I will change it only in function and everywhere else it will change
    // <FilterContext.Provider value={status}>
    <FilterContext.Provider value={{ status, setStatus, statusFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
