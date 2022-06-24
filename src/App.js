import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { GiBrute } from "react-icons/gi";


const theme = createTheme();


const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedServer, setSelectedServer] = React.useState("Select Server");
  const open = Boolean(anchorEl);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("click");
    //console.log(event.currentTarget);
  }
  const handleClose = (event) => {
    setAnchorEl(null);
    console.log("close");
    const { serverName } = event.currentTarget.dataset;
    console.log(event.currentTarget.dataset);
    serverName === undefined ? setSelectedServer("Select Server") : setSelectedServer(serverName)
    console.log("selected server is " +  serverName);
  }

  const serverSelectMenu = () => {
    return (
      <div>
        <Button
          variant="contained"
          id="basic-button"
          aria-controls = {open ? 'basic-menu' : undefined}
          aria-haspopup = "true"
          aria-expanded = {open ? 'true' : undefined}
          onClick={handleClick}
        >
          {selectedServer}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby' : 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} data-server-name="슈시아">슈시아</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="샤일록">샤일록</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="칸나">칸나</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="오필리아">오필리아</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="아이리스">아이리스</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="젤딘">젤딘</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="민타이">민타이</MenuItem>
          <MenuItem onClick={handleClose} data-server-name="패리스">패리스</MenuItem>
        </Menu>
        <Button
          id="basic-button"
        >
          Join
        </Button>
      </div>
    )
  }


  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="s" sx={{backgroundColor:'white'}}>

          <Box
            sx={{
              marginTop:12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            {/*<GroupsIcon sx={{width:60, height:60}}></GroupsIcon>*/}
            <GiBrute size={200} color='#2278CF' />
            <Typography id="mainTitleText" component="h1" variant="h3" >
              ouraid
            </Typography>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //minWidth: '300px',
                //width: '30vw',
            }}>
            <Box
              sx={{
                marginTop:4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3, 
                width: '25vw',
                minWidth: "280px",
                border: '1px dashed grey',
                //backgroundColor: 'ivory',
              }}
            >
              {serverSelectMenu()}
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  )
}


export default App;
