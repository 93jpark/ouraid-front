import './App.css';
import * as React from 'react';
import SignIn from './Login';

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
  const [isLogined, setIsLogined] = React.useState(null);
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


  const Login = () => {
    return (
      <div></div>
    )
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="xs" sx={{backgroundColor:'white'}}>

          <Box
            sx={{
              marginTop:2,
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
            <label>beta</label>
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
                marginTop:1,
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
              {<SignIn/>}
              {/* {isLogined !== null ? serverSelectMenu() : SignIn({isLogined:isLogined, setIsLogined:setIsLogined})} */}
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  )
}


export default App;
