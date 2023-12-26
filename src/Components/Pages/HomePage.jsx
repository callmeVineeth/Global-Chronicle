import React,{useEffect, useState} from 'react'
import axios from './Axios';
// import requests from './Requests'
import { Grid, Box,styled, Typography } from '@mui/material'
import CustomHomePage from '../CustomComponent/CustomHome.jsx';
import homeImg from '../../assets/image-web-3-desktop.jpg'
import SideNewsPanel from '../CustomComponent/SideNewsPanel.jsx';
import PropTypes from 'prop-types';

const CustomBox=styled(Box)(({theme})=>({
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding: 10,
      gap:60,
      marginTop: -40,
      [theme.breakpoints.down('md')]:{
        flexDirection:'column',
      }
}))



const CustomGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(4, auto)',
  overflowY:'scroll', // Three rows
  overflowX:'hidden', // Three rows
  width:300,
  height:500,
  '::-webkit-scrollbar':{
    display:'none'          //to  remove the  scrollbar visibility
  }

}));


HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function HomePage({fetchUrl, selectedCategory}) {
  const[news, setNews]= useState([]);
  const[sideNews, setSideNews]= useState([]);
  const[randomIndex, setRandomIndex]= useState('');



  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get(fetchUrl);
        setNews(response.data.articles);
        setSideNews(response.data.articles.slice(0,10));
        } catch(error){
          // alert('High  network traffic, try after sometime')
          console.log('Error getting data', error.response)
        }
      }
      fetchData();
  }, [fetchUrl]);
  
  
  useEffect(() => {
      // Generate a random index within the range of available articles
    const newIndex = Math.floor(Math.random() * news.length);
    
    // Delay updating the random index after initial rendering
    const timeout = setTimeout(() => {
      setRandomIndex(newIndex);
    }, 800); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, [news]);

// Display the article based on the random index
const selectedArticle = news[randomIndex] || {};

 // Check if title and description exist and have sufficient length before slicing
 const slicedTitle =
 selectedArticle.title && selectedArticle.title.length > 34
   ? selectedArticle.title.slice(0, 34)
   : selectedArticle.title || 'No Title';

const slicedDescription =
 selectedArticle.description && selectedArticle.description.length > 170
   ? selectedArticle.description.slice(0, 170)
   : selectedArticle.description || 'No Description';

return (
  <div style={{ marginTop:'20px'}}>

    <Typography variant='h3' sx={{ textAlign:'center', marginBottom:10, textTransform:'uppercase'}}> {selectedCategory}</Typography> 
   <CustomBox>
     {selectedArticle && (
       <CustomHomePage
         title={slicedTitle}
         desc={slicedDescription}
         img={selectedArticle?selectedArticle.urlToImage : homeImg}
         url={selectedArticle?selectedArticle.url : homeImg}
       />
       )}
  <Box sx={{display:'flex', flexDirection:'column',  py:4,
  boxShadow:3, justifyContent:'center', alignItems:'center',
  backgroundColor:'#f6f6f9', }}>
    
    <Typography variant='h6' color={'error'} fontWeight={'bold'}>
      Find Latest <span style={{ textTransform:'capitalize', color:'blue', fontSize:'26px'}}>
        {selectedCategory}</span>
         News here </Typography>

         <CustomGrid sx={{ }}>
           {sideNews.map((articles)=>(
           <SideNewsPanel key={articles.id} title={articles?articles.title.slice(0,26):'Title'}  
           desc={articles?articles.description.slice(0,60):'no description available'}
           url={selectedArticle&&selectedArticle.url}/>
           ))}
         </CustomGrid>
    
  </Box>
      </CustomBox>
  </div>
  )
}

export default HomePage