import React from 'react';
import '../../../styles/Header.css';
import SubHeader from './SubHeader/SubHeader';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { CloseOutlined } from '@mui/icons-material';

const drawerWidth = 240;

export default function Header({isMobile}) {
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {
        !isMobile ? (
          <>
            <div className='header_container'>
              <a href='/'>
                <img className='afa_logo' src='/assets/logo/AfaLogo.svg' alt='AFALogo' />
              </a>
              <p className='afa_title'>Aalthara Football Association</p>
            </div>
            <SubHeader />
          </>
        ) : (
          <>
            <Grid container className='header_container_mobile'>
              <Grid item xs={10} sm={10} md={10}>
                <a href='/'>
                  <img style={{ width: '56px' }} className='afa_logo_mobile' src='/assets/logo/AfaLogo.svg' alt='AFALogo' />
                </a>
                <div className='afa_title_mobile'>Aalthara Football Association</div>
              </Grid>
              <Grid item xs={2} sm={2} md={2} className='menu_icon'>
                {!open ?
                  <IconButton
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton> :
                  <IconButton
                    onClick={handleDrawerClose}
                  >
                    <CloseOutlined />
                  </IconButton>

                }
                <Drawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                      backgroundColor:'black',
                      color:'#FFD900'
                    },
                  }}
                  variant="persistent"
                  anchor="left"
                  open={open}
                >
                  <SubHeader isMobile={isMobile} />
                </Drawer>
              </Grid>
            </Grid>
          </>
        )
      }
    </>
  )
}
