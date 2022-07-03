import * as React from 'react';
import CharInfoForm from './SignUp/CharInfoForm';
import ServerSelect from './SignUp/ServerSelect';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


import Menu from '@mui/material/Menu';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { GiCharacter } from "react-icons/gi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GrUserAdd } from "react-icons/gr";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { VscDiffAdded, VscAdd } from "react-icons/vsc";


import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import DnfClass from './DnfClass';


const theme = createTheme();



const SignUp = () => {

    const [fulfillment, setFulfillment] = React.useState(false); // 유저정보 입력창 확인여부
    const [ability, setAbility] = React.useState(1.0); // 항마
    const [guild, setGuild] = React.useState(undefined); // 길드
    const [note, setNote] = React.useState(undefined); // 비고
    const [userMainClass, setUserMainClass] = React.useState("male_ghost_knight");
    const [userSubClass, setUserSubClass] = React.useState("male_ghost_knight");

    const [username, setUsername] = React.useState(undefined);
    const [email, setEmail] = React.useState(undefined);
    const [password, setPassword] = React.useState(undefined);
    const [passwordConfirm, setPasswordConfirm] = React.useState(undefined);
    const [userServer, setUserServer] = React.useState();
    const [isKorean, setIsKorean] = React.useState(false); // 한국인 여부

    const [userCharacters, setUserCharacters] = React.useState(new Map);

    const handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        /*
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        */
        console.log(userCharacters);
    }

    const handleContinue = (event) => {
        const _username = document.getElementById('username').value;
        const _email = document.getElementById('email').value;
        const _password = document.getElementById('password').value;
        const _passwordConfirm = document.getElementById('passwordConfirm').value;

        if (isKorean) {

            if (_username === "" || _email === "" || _password === "" || _passwordConfirm === "") {
                alert("입력란을 모두 채워주세요.")
            } else {
                if (_password === _passwordConfirm) {
                    setUsername(_username);
                    setEmail(_email);
                    setPassword(_password);
                    setPasswordConfirm(_passwordConfirm);

                    console.log(username, email, password, passwordConfirm);
                    setFulfillment(true);
                } else {
                    alert("패스워드가 일치하지않습니다.")
                }
            }


        } else {
            alert("🚨ACCESS DENIED🚨\nSouth Korea Citizenship is REQUIRED");
        }
    }

    const userServerSelectHandler = (serverName) => {
        //const serverName = event.target.value;
        console.log(serverName);
        setUserServer(serverName);
    }

    const KoreanValidity = () => {
        setIsKorean(!isKorean);
    }

    const addUserCharactersHandler = (newCharacter) => {
        const newChar = newCharacter;
        const presentCharacters = userCharacters;
        presentCharacters.set(newChar.charName, newChar);
        setUserCharacters(presentCharacters);

    }

    const userInputComponent = () => {
        return (
            <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <TextField
                        name="username"
                        required
                        id="username"
                        label="닉네임"
                        autoFocus
                        sx={{ minWidth: 200, width: 300 }}
                        onChangeCapture={(e) => {
                            //console.log(e);
                            console.log("cc:", e.target.value);
                        }}
                        onEnded={(e) => {
                            console.log("ec", e.target.value);
                        }}

                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <TextField
                        required
                        sx={{ minWidth: 200, width: 300 }}
                        id="email"
                        label="이메일"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <TextField
                        required
                        sx={{ minWidth: 200, width: 300 }}
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <TextField
                        required
                        sx={{ minWidth: 200, width: 300 }}
                        name="passwordConfirm"
                        label="비밀번호 확인"
                        type="password"
                        id="passwordConfirm"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <FormControlLabel onChangeCapture={KoreanValidity}
                        control={<Checkbox value="isKorean" color="primary" />}
                        label="한국인입니까?"
                    />
                </Grid>

                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} sm={12}>
                    <Button
                        id="continueBtn"
                        variant="outlined"
                        sx={{ mt: 3, mb: 2, minWidth: 200, width: 300 }}
                        onClick={handleContinue}
                    >
                        계속
                    </Button>
                </Grid>
            </Grid>
        )
    }

    const classSelectHandler = (main, sub) => {
        console.log("classSelectHandler is working...")
        console.log(main + " " + sub);
    }

    const charInputComponent = () => {
        return (
            <>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Box component="form" noValidate sx={{ m: 1 }} justifyContent="center">
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>



                                    <ServerSelect userServerSelectHandler={userServerSelectHandler}></ServerSelect>

                                    <Divider m="1" variant="middle" />

                                    {/* {
                                        DnfClass.userMainClass.map((name, index) => {
                                            return (
                                                <option key={index + "" + name} value={index}>{name}</option>
                                            )
                                        })
                                    } */}

                                    <CharInfoForm classSelectHandler={classSelectHandler} addUserCharactersHandler={addUserCharactersHandler}></CharInfoForm>


                                    {/* 가입하기 버튼 */}
                                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={handleSubmit}
                                            sx={{ mt: 5, mb: 2, minWidth: 200, width: 300 }}>
                                            가입하기
                                        </Button>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Grid
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        회원가입
                    </Typography>
                    <Grid container justifyContent="center" sx={{ marginTop: 1 }}>
                        <Grid item>
                            <Link href="#" variant="body3">
                                이미 계정이 존재하나요? 로그인
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', }} >

                        {/* {userInputComponent()} */}
                        {fulfillment ? charInputComponent() : userInputComponent()}

                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>

    );
}


export default SignUp;