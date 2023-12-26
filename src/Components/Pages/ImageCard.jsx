import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import politicsImg from '../../assets/politics.jpg';
import scienceImg from '../../assets/science.jpg';
import sportsImg from '../../assets/Sports.jpg';
import technologyImg from '../../assets/Technology.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
     
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const imageListWidth = isSmallScreen ? 280 : 600; // Define width based on breakpoint
  const imageListHeight = isSmallScreen ? 200 : 370; // Define height based on breakpoint
  const columns = isSmallScreen ? 4 : 4;
  const rowHeight = isSmallScreen ? 65 : 121;


  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    pointerEvents: 'none',
  };

  

  const buttonStyle = {
    height: isSmallScreen?'4px':'10px',
    width: isSmallScreen?'12vw':'70px',
    padding:'14px',
    marginBottom:'50px',
    backgroundColor: '#b61e30',
    opacity:'80%',
    color: 'white',
    textAlign: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    ":hover":{
      opacity:'100%',
        },
   
  };

  return (
    <>
      
      <Box sx={{display:'flex', flexDirection:'row',
         alignItems:'center', backgroundColor:'black', color:'white', justifyContent:'center'}}>
        <h1>GLOBAL CHRONICLE</h1>
      </Box>
        
           <div  style={{ paddingLeft:'60px', paddingRight:'60px'}}>
    <ImageList
          sx={{ minWidth: imageListWidth, height: imageListHeight, p: 1, overflow: 'hidden',my:2 }}
          variant="quilted"
          cols={columns}
          rowHeight={rowHeight}
        >
               {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} position="relative" >
              <div style={{ ...overlayStyle }}>
                {/* <h3 style={titleStyle}>{item.title}</h3> */}
                <div style={buttonStyle}>{item.title}</div>
              </div>
              <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy"/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

const itemData = [
  {
    img: politicsImg,
    title: 'Politics',
    rows: 3,
    cols: 2,
  },
  {
    img: sportsImg,
    title: 'Sports',
    cols: 2,
    rows: 2,
  },
  {
    img: technologyImg,
    title: 'Technology',
  },
  {
    img: scienceImg,
    title: 'Science',
  },
];
