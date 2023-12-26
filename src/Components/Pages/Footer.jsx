import React from 'react'
import { Box ,styled, Button} from '@mui/material'



const CustomFooter=styled(Box)(({theme})=>({
    height: 80,
    display:'flex',
    padding:'10px',
    alignItems:'center',
    justifyContent:'space-between',
    overflow:'hidden',
})
)

function Footer({ pgNo, onPageNoChange }) {

  const handleNext = () => {
    const newPageNo = parseInt(pgNo, 10) + 1; // Incrementing pgNo
    onPageNoChange(newPageNo); // Update pgNo in App.js
    console.log('page clicked', newPageNo);
  };
   
  const handlePrev = () => {
    const newPageNo = parseInt(pgNo, 10) - 1; // Incrementing pgNo
    onPageNoChange(newPageNo); // Update pgNo in App.js
    console.log('page clicked', newPageNo);
  };
   


  return (
    <CustomFooter>
      <Button onClick={handlePrev} size='large' variant="contained">Previous</Button>
      <Button onClick={handleNext} size='large' variant="contained">Next</Button>
    </CustomFooter>
  )
}

export default Footer