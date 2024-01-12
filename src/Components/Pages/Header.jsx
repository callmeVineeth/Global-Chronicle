import React, { useEffect, useState } from 'react';
import { AppBar, Box, Typography, styled} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import{Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import { navbarItems,icons } from '../CustomComponent/NavbarITems';


const NavbarStyles = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  zIndex:'999',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));

const NavLinks = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '16px',
  textTransform:'uppercase',
  fontWeight:'bold',
  transform: 'all',
  cursor:'pointer',
  ':hover': {
    transition: '2s easeInOut',
    transitionDuration: '2s',
    color:'blue',
  },
  [theme.breakpoints.down('md')]:{
     display:'none'
  }
}));


const MobToogleBar = styled(MenuIcon)(({theme})=>({
     cursor:'pointer',
     zIndex:'999',
     color:'white',
     display:'none',
     marginRight: theme.spacing(2),
     [theme.breakpoints.down('md')]:{
          display:'block',
          marginRight:'350px',
     }
}))



function Header({onCategoryChange}) {

  const[ drawerState, setDrawerState]= useState({left:false});

  // state for navbar to show after y direction scroll
  const[show, setShow]= useState(false);  

  const handleCategoryChange = (category) => {
    // Call the onCategoryChange function passed as a prop
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    setDrawerState({ ...drawerState, left: false }); // Close the mobile drawer after category change
  };



   useEffect(()=>{
    const scrollHandler = ()=>{

      if(window.scrollY > 700){
        setShow(true);
      }else{
        setShow(false)
      }
    };
    window.addEventListener('scroll', scrollHandler);
    
    return()=>{
      window.removeEventListener('scroll',scrollHandler)
    
  }
   },[]); 


  //  Drawer for mobile navigation menu
  const toggleDrawer=(anchor, open)=>(event)=>{
    if
    (event.type === 'keydown' && 
     (event.key === 'Shift' || event.key ==='Tab')
     ) {
      return;
    }
    setDrawerState({...drawerState, [anchor]:open});
}

const list = (anchor)=> (
  <Box sx={{width: anchor=== 'top' || anchor === 'bottom' ? 'auto': 250 }}
   role='presentation'
   onClick={toggleDrawer(anchor, false)}
   onKeyDown={toggleDrawer(anchor, false)}
   >
    <List>
{
  navbarItems.map((item, index) =>(

          <ListItem key={item.id} disablePadding>
            <ListItemButton  onClick={() => handleCategoryChange(item.category)}>    
            <ListItemIcon> 
       {index >= 0 && index < icons.length && icons[index]}
       </ListItemIcon>
      <ListItemText primary={item.text} />
       </ListItemButton>
       </ListItem>
  ))
      }
      </List>

  </Box>
)

  
  return (
    <>  {show && (
         <AppBar sx={{ backgroundColor: 'black', color:'white' , display: 'flex', flexDirection: 'row',
         alignItems:'center',justifyContent:'center', padding:'10px', height:'80px'  }}>
         
           <NavbarStyles>  
               
           <MobToogleBar onClick={toggleDrawer("left", true)}/>   

          <Drawer
          anchor='left'
          open= {drawerState['left']}
          onClose={toggleDrawer('left', false)}>
           
           {list('left')}
          </Drawer>
       
          <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'40px'}}>
             {/* <NavLogo />  */}

          {navbarItems.map(item => {
            if (item.isLogo) {          
          return (
            <img
              key={item.id}
              src={item.logoSrc}
              alt="Logo"
              style={{maxWidth:160}}
              // Add any styling or props for the logo
            />
          );
                  } else {
              return (
                <NavLinks key={item.id} to={item.path}  onClick={() => handleCategoryChange(item.category)}>
                  {item.text}
                </NavLinks>
              );
            }
          })}
         </Box>

           </NavbarStyles>
           
         </AppBar>  )}
  
    </>
  );
}

export default Header;
