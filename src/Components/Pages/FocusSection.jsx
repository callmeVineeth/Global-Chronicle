import React, { useEffect, useState } from 'react'
import FocusLargeCard from '../CustomComponent/FocusLargeCard'
import FocusSmallCard from '../CustomComponent/FocuSmallbar'
import FocusMedCard from '../CustomComponent/FocusMedCard'
import axios from 'axios'
import { Box, styled } from '@mui/material'

const CustomBox = styled(Box)(({theme})=>({
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',      
 padding:2,
 gap:40,
 marginTop:'100px',
 [theme.breakpoints.down('md')]:{
  flexDirection:'column',
 }
}))
const MiniBox = styled(Box)(({theme})=>({
 display:'flex',
 flexDirection:'column',
 justifyContent:'space-evenly',
//  backgroundColor:'yellow',
 borderLeft:'1px solid rgba(0, 0, 0, 0.2)',
 borderRight:'1px solid rgba(0, 0, 0, 0.2)',
 
}))
// ... your imports

function FocusSection({ fetchUrl,pgNo }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`${fetchUrl}&page=${pgNo}`); // Include pgNo in the URL
        setData(request.data.articles);
      } catch (error) {
        console.log('Error getting data', error.response);
      }
    }
    fetchData();
  }, [fetchUrl, pgNo]); // Include pgNo in the dependency array


  return (
    <CustomBox>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        {data.length > 0 && (
          <>
            <FocusLargeCard key={data[0].id} img={data[0].urlToImage} title={data[0].title.slice(0, 80)} desc={data[0].description.slice(0, 200)} url={data[0].url} />
            {data.slice(1, 4).map((item) => (
              <FocusSmallCard key={item.id} img={item.urlToImage} desc={item.description.slice(0, 90)} url={item.url} />
            ))}
          </>
        )}
      </div>

      <MiniBox>
        {data.length > 4 &&
          data.slice(4, 7).map((item) => (
            <FocusMedCard key={item.id} img={item.urlToImage} desc={item.description.slice(0, 50)} url={item.url} />
          ))}
      </MiniBox>
    </CustomBox>
  );
}

export default FocusSection;
