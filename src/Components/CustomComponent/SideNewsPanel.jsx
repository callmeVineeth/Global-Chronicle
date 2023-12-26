import React from 'react';
import { Grid, Typography, styled } from '@mui/material';


const MiniBox = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    gap: 20,
    color: 'black',
    boxShadow:1,
    // backgroundColor:'#052962',
    padding: 10,
    borderBottom:'2px solid  rgba(173, 216, 230, 0.4) ',
    minWidth:300,
    maxHeight:800,
    backgroundColor:'#f6f6f9',
    ":hover":{
      backgroundColor:'#999b',
    }
    

}));



function SideNewsPanel({ desc,title , url}) {
  return (
      <MiniBox item>
        <a href={url} target='_black' style={{textDecoration:'none', color:'black'}}>
        <Typography variant='h6' fontWeight={'bold'}>{title}...</Typography>
        <Typography variant='body2' sx={{opacity:'70%',color:'black',':hover':{opacity:'90%'}}}>
         {desc}...
        </Typography>
        </a>
      </MiniBox>
  );
}

export default SideNewsPanel;
