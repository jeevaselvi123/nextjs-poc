import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../../typings';
import { useRouter } from 'next/router'

type PageProps = {
      Id : string
  }


export default function MultiActionAreaCard() {

   const [item, setItems] = useState<Product>();

const router = useRouter()
const rowId = router.query.id
    
    useEffect( () => {
        axios.get<Product>(`https://dummyjson.com/products/${rowId}`).then((res  =>{
          setItems(res.data);
        }))  
      }, [])


  return (
    <>
      {
        item && <Card raised sx={{
          maxWidth: 580,
          margin: "0 auto",
          padding: "0.1em",
        }}>
        <CardActionArea>
          <CardHeader component={Typography} title={item.brand} />
          <CardMedia
           component="img"
           height="250"
            image={item.images[0]}
            alt={item.title}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
            {item.title}
            </Typography>
            <Typography paragraph color="text.secondary">
             {item.description}
             </Typography>
            <Typography variant="h6" color="text.primary">
             Actual Cost: {item.price}/-
            </Typography>
            <Typography variant="h6" color="text.secondary">
             Discount Percentage: {item.discountPercentage} %
            </Typography>
            <Typography paragraph color="text.primary">
             Rating: {item.rating} 
            </Typography>
            <Typography variant="body2" color="text.primary">
             Stock: {item.stock} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
        <Button size="small">Add to Favorites</Button>
        </CardActions>
      </Card>
      }
    </>

  );
}

