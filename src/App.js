import React, { useState, useEffect } from 'react';
import { NewsProvider } from './NewsContext';
import HomePage from './Components/Pages/HomePage';
import Header from './Components/Pages/Header';
import Logobar from './Components/Pages/Logobar';
import FocusSection from './Components/Pages/FocusSection';
import ImageCard from './Components/Pages/ImageCard';
import Footer from './Components/Pages/Footer';


function App() {
  const [pgNo, setPgNo] = useState('1');
  const [newsData, setNewsData] = useState([]); // State to hold fetched data
  const [selectedCategory, setSelectedCategory] = useState('headlines');

  let api_key = process.env.REACT_APP_NEWS_API;

  // Function to update pageNo
  const handlePageNoChange = (newPageNo) => {
    setPgNo(newPageNo);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPgNo('1'); // Reset page number when category changes
    console.log('category change cliked',category,selectedCategory)
  };


  const baseUrl = (category) => {
    return `https://newsapi.org/v2/everything?q=${category}&apiKey=${api_key}&page=${pgNo}`;
  };

  // Fetch data when pgNo changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl('headlines'));
        const data = await response.json();
        setNewsData(data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pgNo, selectedCategory]);

  return (
    <NewsProvider>
      <div className="App">
  <ImageCard />
        <Logobar onCategoryChange={handleCategoryChange}  />
        <Header onCategoryChange={handleCategoryChange} />
        <HomePage fetchUrl={baseUrl(selectedCategory)} selectedCategory={selectedCategory} />
         <FocusSection fetchUrl={baseUrl(selectedCategory)} />
        <Footer pgNo={pgNo} onPageNoChange={handlePageNoChange} /> 
      </div>
    </NewsProvider>
  );
}

export default App;
