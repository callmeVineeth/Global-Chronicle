import React from 'react'
import { Box , styled, Typography} from '@mui/material'
import logo from '../../assets/GcLogo.png'
import { navbarItems } from '../CustomComponent/NavbarITems'

const LogoBox=styled(Box)(({theme})=>({
    height:30,
    borderLeft:'12px solid black',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'12px',

}))

const ListBox=styled(Box)(({theme})=>({
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
   width:'100vw',
}))
const CustomTypography=styled(Typography)(({theme})=>({
  padding: '20px', 
  color:'white',
  textTransform:'uppercase',
  fontSize:'18px',
  fontFamily:'bold', 
  cursor:'pointer',
  ":hover":{
color:'blue',
  },

  [theme.breakpoints.down('md')]:{
    display:'none',
    label:'haiijoij'
   }

}))

function Logobar({onCategoryChange}) {

  
  const handleCategoryChange = (category) => {
    // Call the onCategoryChange function passed as a prop
      onCategoryChange(category);
  }

  return (
    <div>

      <Box sx={{display:'flex',alignItems:'center',height:150 ,m:5, justifyContent:'center'}}>
         
       <img src={logo} alt='logo' style={{ height:'100%'}}/>
       <LogoBox> "Where News Finds Its Voice." </LogoBox>
  
      </Box>

      <ListBox sx={{backgroundColor:'black', height:60}}>
      {navbarItems.map((item, key) => (
          <CustomTypography key={item.id} variant="subtitle1" onClick={() => handleCategoryChange(item.category)}>
            {item.text}
          </CustomTypography>
        ))}
      </ListBox>
    </div>  
  )
}

export default Logobar