import React from 'react';
import Container from '@mui/material/Container'; 

export default function HeroSection() {
  return (
    <div className='hero' id="hero">
      <div className='shape'>
        <Container maxWidth="xl">
          <div className='p-5'>
            <h1>Discover Your Wonder</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam.</p>
          </div>
        </Container>
      </div>
    </div>
  )
}
