import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';  
import { speciality } from '../utils/constant';
import useResponsive from '../utils/useResponsive';
import Carousel from './Carousel';

export default function SpecialitySection() {
  const { isDesktop } = useResponsive();
  
  return (
    <div className='speciality' id="speciality">
      <Container maxWidth="xl">
        <div className='p-5'>
          <h2 className='title'>Our Speciality</h2>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

          {isDesktop ? (
            <Grid container spacing={2}>
              {speciality.map((item, index) => {
                return (
                  <Grid item xs={12} md={4} key={index}>
                    <div className='card'>
                      <img src={require(`../assets/speciality-${index+1}.svg`)} alt={item.title} />
                      <p className='card-title'>{item.title}</p>
                      <p className='card-desc'>{item.desc}</p>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          ) : <Carousel />}
        </div>
      </Container>
    </div>
  )
}
