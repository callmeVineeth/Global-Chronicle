import React, { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [data, setData] = useState([]);
  const[pageNo, setPageNo]=useState('1');

  const contextValue = {
    pageNo, 
    setPageNo,
    selectedCategory,
    data,
    setData,
    setSelectedCategory,
  };

  return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
};
