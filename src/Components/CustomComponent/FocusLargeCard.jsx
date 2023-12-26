import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Box,styled } from '@mui/material';

const CustomContainer=styled(Container)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  backgroundColor:'#f6f6f9',
  alignItems:'center',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
  }
}))



function  FocusLargeCard({title, desc,img,url}) {
  return (
    <Card sx={{ maxWidth: 650,minHeight:350,p:2,mb:10, display:'flex', flexDirection:'row' , 
    boxShadow:4,backgroundColor:'#f6f6f9',
    '@media(max-width:768px)':{minWidth:'300px', flexDirection:'column'} }}>
        
      <CustomContainer >
          <a href={url} target='_blank' rel="noreferrer" style={{ color:'black'}}>
           <Box sx={{ textAlign:'left'}}>
           <Box sx={{ fontWeight: 'bold', fontSize:30 ,
          '@media(max-width:768px)':{fontSize:20}}}> {title}... </Box>
           </Box>
   
           <CardContent sx={{ textAlign:'left'}}>
           <Box sx={{ fontWeight: '500', fontSize:'large', opacity:'70%' }}> {desc}... </Box>

             
           </CardContent>
           </a>
     </CustomContainer>

     <CardMedia
          sx={{ height: 260,
                minWidth:'300px',
                objectFit:'contain',  }}
          image={img}
          title="NewsImage"
          />
  </Card>
    
  )
}

export default FocusLargeCard;