import { Grid } from '@mui/material';
import React from 'react';
import '../../../styles/Tiles.css';

let tilesContent = [
  {
    image: '/assets/images/CalendarTiles.svg',
    title: 'Calendar',
    link: '/calendar',
  },
  {
    image: '/assets/images/MembershipTiles.svg',
    title: 'Membership',
    link: '/membership',
  },
  {
    image: '/assets/images/LocationTiles.svg',
    title: 'Locations',
    link: '/kidsacademy',
  },
  {
    image: '/assets/images/VisionTiles.svg',
    title: 'Vision And Mission',
    link: '/vision',
  },
];

export default function Tiles({ isMobile}) {
  return (
    <Grid container spacing={3} sx={{ paddingLeft: !isMobile ? '2rem':'0rem' }}>
      {tilesContent.map((tile, index) => (
        <Grid key={index} item className='tiles_container' xs={12} sm={12} md={6} lg={6}>
          <a href={tile.link}>
            <img style={{ maxWidth: '100%' }} className='tiles_image' src={tile.image} alt={`Tile - ${tile.title}`} />
            <div className='tiles_title'>{tile.title}</div>
          </a>
        </Grid>
      ))}
    </Grid>
  );
}
