import { Button, Grid2, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid2 className="text-center bg-black text-white mt-10" container
          sx={{bgcolor:'black', color:'white',py:3}}
        >
          <Grid2 item xs={12} md={2} sm={6} className='mx-32'>
            <div><Typography className='pb-2' variant='h6'> Company </Typography></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> About </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Blog </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Press </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Jobs </Button></div>
          </Grid2>  

          <Grid2 item xs={12} md={2} sm={6} className='mx-32'>
          <div><Typography className='pb-2' variant='h6'> Solutions </Typography></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Marketing </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Analytics </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Commerce </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Support </Button></div>
          </Grid2> 

          <Grid2 item xs={12} md={2} sm={6} className='mx-32'>
            <div><Typography className='pb-2' variant='h6'> Documentation </Typography></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Guides </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> API Status </Button></div>
          </Grid2> 

          <Grid2 item xs={12} md={2} sm={6} className='mx-32'>
            <div><Typography className='pb-2' variant='h6'> Legal </Typography></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Claim </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Privacy </Button></div>
            <div><Button className='pb-5' variant='h6' gutterBottom> Terms </Button></div>
          </Grid2> 

          <Grid2 item xs={12} md={2} sm={6} className='mx-32'>
            <div><Typography className='pb-2' variant='h5'> SHOPOL </Typography></div>
          </Grid2>

          <Grid2 item xs={12} className='pt-10'>
            <Typography variant='body2' component='p' align='center'> &copy;2024 Shopol. All rights reserved. </Typography>
          </Grid2>
        </Grid2>
    </div>
  )
}

export default Footer