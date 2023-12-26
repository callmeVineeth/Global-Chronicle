import  React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sampleImg from '../../assets/image-gaming-growth.jpg'

export default function FocusMedCard({img, desc, url}) {
  return (
    <Card sx={{ maxWidth: 250,maxHeight:300, m:2 ,borderRadius:0,
      boxShadow:2 }}>
      <CardMedia
        sx={{ minHeight: 180 , borderRadius:0}}
        image={img||sampleImg}
        
      />
      <CardContent sx={{textAlign:'left', backgroundColor:'#f6f6f9'}}>
        <a href={url} target='_black'>
        <Typography gutterBottom variant="body"  component="div" sx={{fontWeight:'bold', color:'black','@media(max-width:768px)':{fontSize:'16px'}}}>
         {desc}
        </Typography>
        </a>
      </CardContent>
    </Card>
  );
}