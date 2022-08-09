import { React } from 'react'
import { Box, Container } from '@mui/material'

function Footer () {
  return (
    <Box sx={{ p: 3 }} bgcolor='text.secondary' color='white'>
      <Container maxWidth='lg'>
        <Box textAlign='center'>Lucas Minari &reg; {new Date().getFullYear()}</Box>
      </Container>
    </Box>
  )
}
export default Footer
