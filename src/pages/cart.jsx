import { useContext, useEffect } from "react";
import FruitContext from "../context/fruitContext";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Cart(){
  const { Fruits, setCartItems, CartItems, FruitImge } = useContext(FruitContext);
  const fruitsStorage = JSON.parse(localStorage.getItem('items'))
  const FruitsCart = Fruits.filter((f) => fruitsStorage.find((i) => f.id === i.id));
  const fruitsImg = FruitImge.filter((f) => fruitsStorage.find((img) => f.id === img.id));


  const handleRemoveItem = (id) => {
    const copy = fruitsStorage; 
    const item = copy.find((i) => i.id === id);   
    if(item.qtd > 1) {
      item.qtd = item.qtd - 1;
      console.log(copy)
      setCartItems(copy)
      localStorage.setItem('items',JSON.stringify(copy));
    }  else {
      const itemFiltred = copy.filter((i) => i.id !== id)
      console.log(itemFiltred)
      setCartItems(itemFiltred)
      localStorage.setItem('items',JSON.stringify(itemFiltred));
    }
  };

  const handleAddItem = (id) => {
    const copy = fruitsStorage; 
    const item = copy.find((i) => i.id === id);   
    if(item) {
      item.qtd = item.qtd + 1;
      console.log(copy)
      setCartItems(copy)
      localStorage.setItem('items',JSON.stringify(copy));
    } 
  };

  const handleDeleteItem = (id) => {
    const copy = fruitsStorage; 
    const itemFiltred = copy.filter((i) => i.id !== id)
    setCartItems(itemFiltred)
    localStorage.setItem('items',JSON.stringify(itemFiltred));
     
  };

  const cleanCart = () => {
    setCartItems([])
      localStorage.setItem('items',JSON.stringify([]));
  }

  const getValue = (id) =>{
    const item = fruitsStorage.find((i) => i.id === id);
  return item.qtd;
}

  return(
    <div>
      <Button sx={{margin: 2}} variant="contained" startIcon={<DeleteIcon />} onClick={() => cleanCart()} size="small" >Apagar Carrinho</Button>
 {  FruitsCart.map((fruit) => (     
 
        <Card key={fruit.id} sx={{border: 1, minWidth: 275, margin: 2}}>
          
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {fruit.genus}
        
      </Typography>
      <Typography variant="h5" component="div">
      {fruit.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {fruit.family}
      </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" onClick={() => handleRemoveItem(fruit.id)}><RemoveIcon /></Button>
      <span>{getValue(fruit.id)}</span>
      <Button size="small" onClick={() => handleAddItem(fruit.id)}><AddIcon /></Button>
      <Button startIcon={<DeleteIcon />} variant="contained" size="small" onClick={() => handleDeleteItem(fruit.id)}>Deletar item</Button>   </CardActions>
  </Card>
  
      ))}
      </div> )
}

export default Cart;