import { useContext, React } from 'react'
import { useNavigate } from 'react-router-dom'
import FruitContext from '../context/fruitContext'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { Box } from '@mui/system'
import { Button, CircularProgress, Stack } from '@mui/material'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
})

function FruitList () {
  const { Fruits, setCartItems, CartItems, FruitImge, Loading } = useContext(FruitContext)
  const jpg = FruitImge.map((i) => i.img)
  const navigate = useNavigate()

  const handleAddItems = (id) => {
    const copyItems = [...CartItems]
    const item = copyItems.find((item) => item.id === id)
    if (!item) {
      copyItems.push({ id, qtd: 1 })
      setCartItems(copyItems)
      localStorage.setItem('items', JSON.stringify(copyItems))
      console.log(copyItems)
    } else {
      item.qtd += 1
      setCartItems(copyItems)
      localStorage.setItem('items', JSON.stringify(copyItems))
    }
  }

  const HandleClick = (id) => {
    navigate(`/fruit/${id}`)
  }

  if (!Loading) {
    return (
    <div className='container'>
<Stack
direction={'rows'}

flexWrap={'wrap'}
>
      { Fruits
        .map((Fruit, index) => (
<Paper key={Fruit.id}
      sx={{
        p: 2,
        spacing: 2,
        borderRadius: 2,
        margin: 1,
        my: 1,
        maxWidth: 350,
        flexGrow: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
      }}
    >

      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase onClick={() => HandleClick(Fruit.id)} sx={{ width: 128, height: 128 }}>
            <Img alt={Fruit.name} src={jpg[index]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {Fruit.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {Fruit.genus}
              </Typography>

            </Grid>
            <Grid item>
            <Button variant='contained' onClick={() => handleAddItems(Fruit.id) } size="small" color="primary">
          ADICIONAR
        </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Paper>

        ))}
   </Stack>
   </div>
    )
  }

  return (
    <Box sx={{ display: 'flex', margin: 5, justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default FruitList
