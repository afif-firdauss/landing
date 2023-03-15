import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';  
import { whoWeAre } from '../utils/constant';
import useResponsive from '../utils/useResponsive';
import prev from '../assets/prev.svg';
import next from '../assets/next.svg';

export default function WhoWeAreSection() {
  const { isDesktop } = useResponsive();
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active > 0) {
      setActive(prev => prev - 1);
    }
  }

  const handleNext = () => {
    if (active < 2) {
      setActive(next => next + 1);
    }
  }

  return (
    <div className='box' id="who-we-are">
      <Container maxWidth="xl">
        <div className='p-5'>
          {isDesktop ? (
            <Grid container spacing={2}>
              {whoWeAre.map((item) => {
                return (
                  <Grid item xs={12} md={4} key={item.id}>
                    <div>
                      <h4 className='title'>{item.title}</h4>
                      <h5 className='subtitle'>{item.subtitle}</h5>
                      <p className='desc'>{item.desc}</p>
                    </div>
            
                    <div className='text-info'>
                      {`0${item.id}`} <span className='text-info__dash'>/</span> <span className='text-info__number'>03</span>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          ) : (
            <div>
              <div>
                <h4 className='title'>{whoWeAre[active].title}</h4>
                <h5 className='subtitle'>{whoWeAre[active].subtitle}</h5>
                <p className='desc'>{whoWeAre[active].desc}</p>
              </div>
            
              <div className='bottom-box'>
                <div className='text-info'>
                  {`0${whoWeAre[active].id}`} <span className='text-info__dash'>/</span> <span className='text-info__number'>03</span>
                </div>

                <div>
                  <img src={prev} alt="prev" onClick={handlePrev} />
                  <img src={next} alt="next" onClick={handleNext} />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
