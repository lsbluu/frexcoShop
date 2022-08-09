import { useContext, React } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from '../imgs/logo.png'
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'
import FruitContext from '../context/fruitContext'

function Menu () {
  const { CartItems } = useContext(FruitContext)
  const qtd = CartItems.reduce((total, i) => total + i.qtd, 0)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <NavLink to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt='logo' width='50'></img>
          </IconButton> </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          <IconButton
            size="small"
            edge="start"
            color="inherit"

            sx={{ mr: 1 }}
          >
            <NavLink className='navLink' to="/"> Início </NavLink>
          </IconButton>

          </Typography>

          <NavLink className='navLink' to="/carrinho"><IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Badge badgeContent={qtd} color="error">
          <ShoppingCartIcon fontSize='large' />
              </Badge>
          </IconButton></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Menu
