import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Container, Box,styled,} from '@mui/material';
import homeImg from '../../assets/image-web-3-desktop.jpg'

const CustomContainer=styled(Container)(({theme})=>({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  backgroundColor:'#f6f6f9',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
  }
}))


CustomHomePage.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


function CustomHomePage({title, desc,img,url}) {

  const handleImageError= (e)=>{
    e.target.onerror =null;
    e.target.src=homeImg;
}

  return (
    <Card sx={{ maxWidth: 700, display:'flex', flexDirection:'column' ,gap:2,
    '@media(max-width:768px)':{minWidth:'300px'} }}>
         <CardMedia
          sx={{ height: 350,
                top:0, left:0,
                width:'100%',
                objectFit:'cover', backgroundColor:'#f6f6f9',
                borderRight:'1px solid rgba(0, 0, 0, 0.2)' }}
           
          image={img} 
          onError={handleImageError}
          title="NewsImage"
          />
      <CustomContainer>
           <Box sx={{ minWidth:200 ,textAlign:'left'}}>
           <Box sx={{ fontWeight: 'bold', fontSize:30 }}> {title}... </Box>
           </Box>
   
           <CardContent sx={{ textAlign:'left'}}>
           <Box sx={{ fontWeight: '500', fontSize:'large', opacity:'70%' }}> {desc}... </Box>

             <a href={url} target='_blank
             '><Button variant="contained" color="error" size='large' sx={{m:2}}> READ MORE</Button> </a>
           </CardContent>
     </CustomContainer>
  </Card>
    
  )
}

export default CustomHomePage;