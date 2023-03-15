import React from 'react';
import image from '../assets/core-values.png';
import Container from '@mui/material/Container';  
import Grid from '@mui/material/Grid';  
import { coreValue } from '../utils/constant';

export default function CoreValueSection() {
  return (
    <div className='core-value-section' id="core-value">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <div className='p-5'>
              <h2 className='title'>Our Core Values</h2>
              <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.</p>
              <p>In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>

              {coreValue.map((value, index) => {
                return (
                  <div className="value" key={index}>
                    <div className='strip'></div>
                    <div>
                      <h3 className="subtitle">{value.title}</h3>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='image'>
              <img src={image} alt="core-value" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
