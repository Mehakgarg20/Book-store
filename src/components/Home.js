import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Typography variant='h4' sx={{marginTop:2}}>BOOKSTORE</Typography>
        <img src='https://images.unsplash.com/photo-1575220360526-be964710f279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{height:"15%", width:"80%", marginTop:"20px"}}></img>
        <Button LinkComponent={Link} to="/books" sx={{marginTop:5, background:"black"}} variant='contained'>
          <Typography variant='h3'>View all products</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home