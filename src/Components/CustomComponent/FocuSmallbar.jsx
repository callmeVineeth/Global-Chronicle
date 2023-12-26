import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import sampleImg from '../../assets/image-gaming-growth.jpg'

export default function FocusSmallCard({img, desc,url}) {
    return (
     <Card sx={{ maxWidth: 650,p:1,m:2,borderTop:'1px solid',maxHeight:300 ,borderRadius:0, boxShadow:'none',  display:'flex',
      flexDirection:'row', alignItems:'center', justifyContent:'center',
     '@media(max-width:768px)':{ maxWidth: '300px',maxHeight:'350px', overflow:'hidden'}}}>
        <CardMedia
          sx={{ minWidth: 100 ,minHeight:100 , borderRadius:0, backgroundColor:'black',
          '@media(max-width:768px)':{minHeight:'100px', objectFit:'cover',} }}
          image={img||sampleImg}
          />
          <a href={url} rel='noreferrer' target='_blank'>            
        <CardContent sx={{textAlign:'left', backgroundColor:'#f6f6f9', color:'black'}}>
          <Typography gutterBottom variant="h5"  component="div" sx={{fontWeight:'bold',
          '@media(max-width:768px)':{ fontSize:'16px' } }}>
           {desc} 
          </Typography>
        </CardContent>
          </a>
     </Card>
  );
}