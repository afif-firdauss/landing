import React from 'react';
import image from '../assets/logo-white.svg';
import Container from '@mui/material/Container';
import { handleScroll } from '../utils/constant';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {  } from '@mui/material/Select';

export default function Footer() {
  return (
    <div className='footer'>
      <Container maxWidth="xl">
        <div className='p-5'>
          <img src={image} alt="core-value" />

          <div className='container'>
            <div className='footer__card'>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <Select
                  value={['TECHNOLOGY DEPARTMENT']}
                  input={<OutlinedInput />}
                  InputLabelProps={{shrink: false}}
                >
                  <MenuItem
                    key={1}
                    value='TECHNOLOGY DEPARTMENT'
                  >
                    TECHNOLOGY DEPARTMENT
                  </MenuItem>
                </Select>
              </FormControl>

              <p>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
            </div>

            <div className='footer__list'>
              <ul>
                <li onClick={() => handleScroll('who-we-are')}>Who We Are</li>
                <li onClick={() => handleScroll('core-value')}>Our Values</li>
                <li onClick={() => handleScroll('speciality')}>The Perks</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
