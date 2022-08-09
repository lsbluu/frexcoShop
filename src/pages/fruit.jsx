import { useContext } from "react";
import { useParams } from 'react-router-dom';

import FruitContext from "../context/fruitContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Fruit(){
  const { id } = useParams();

  const handleAddItems = (param) => {
const id = Number.parseInt(param);
    const copyItems = [...CartItems];

    const item = copyItems.find((item) => item.id === id);
    
    if(!item) {
      copyItems.push({id, qtd: 1})
      setCartItems(copyItems);
      localStorage.setItem('items',JSON.stringify(copyItems));
    console.log(copyItems)
    } else {
      item.qtd +=1;
      setCartItems(copyItems);
      localStorage.setItem('items',JSON.stringify(copyItems));

    }
    
  }
  

  const { Fruits, setCartItems, CartItems, FruitImge } = useContext(FruitContext);
  const fruitFiltred = Fruits.find((f) => f.id === Number.parseInt(id) );
  const imgFruit = FruitImge.find((i) => i.id === Number.parseInt(id));



  return(
    <section className="fruitItem">   
     <Card sx={{ maxWidth: 550 }}>
      <CardMedia
        component="img"
        height="auto"
        image={imgFruit.img}
        alt="fruits"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {fruitFiltred.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
        Family: {fruitFiltred.family}<br />
        Genus: {fruitFiltred.genus}<br />
        Order: {fruitFiltred.order}<br />
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
      <TableHead>            
        <TableCell align="center">Tabela Nutricional</TableCell>
        </TableHead>
        <TableHead>
        

          <TableRow>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Sugar&nbsp;(g)</TableCell>

          </TableRow>
        </TableHead>
        
        <TableBody><TableRow
              key={fruitFiltred.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{fruitFiltred.nutritions.calories}</TableCell>
              <TableCell align="right">{fruitFiltred.nutritions.fat}</TableCell>
              <TableCell align="right">{fruitFiltred.nutritions.protein}</TableCell>
              <TableCell align="right">{fruitFiltred.nutritions.carbohydrates}</TableCell>
              <TableCell align="right">{fruitFiltred.nutritions.sugar}</TableCell>

            </TableRow>

          
        </TableBody>
      </Table>
    </TableContainer>
        
              </Typography>
      </CardContent>
      <CardActions  >
        <Button sx={{ width: 550 }} variant="contained" size="large" onClick={()=> handleAddItems(id)}>ADICIONAR</Button>
      </CardActions>
    </Card>  
  </section>)
}

export default Fruit;