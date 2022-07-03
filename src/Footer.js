import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Typography, Link } from '@mui/material';

const Footer = () => {

    const Copyright = (props) => {
        return (
            // sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContnet: "center" }}
          <Typography variant="body2" color="text.secondary" align="center" {...props}  >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }


    return (
        //sx={{ display:"flex", flexDirection: "column", alignItems: "center", justifyContnet: "center" }}
        <Grid >
        {/* <Box fullWidth> */}
            
            <Copyright sx={{ mt: 5 }}/>
            
        </Grid>
    )

}


export default Footer;