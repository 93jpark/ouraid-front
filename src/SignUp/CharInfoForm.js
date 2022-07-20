import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import DnfClass from '../DnfClass';
import Button from '@mui/material/Button';

function CharInfoForm({ charCount, classSelectHandler, addUserCharactersHandler }) {
    const [userMainClass, setUserMainClass] = React.useState("male_ghost_knight");
    const [userSubClass, setUserSubClass] = React.useState("soul_bringer");
    const [korClassName, setKorClassName] = React.useState("소울브링어");

    console.log("DnfClass:" + DnfClass);
    console.log(userMainClass);
    console.log(userSubClass);


    const mainClassSelectHandler = (event) => {
        console.log("selected");
        console.log(event.target.value);
        setUserMainClass(event.target.value);
        console.log("main:"+userMainClass);
    }


    const subClassSelectHandler = (event) => {
        //console.log("selected");
        //console.log(event.target.value);
        let _subClass = event.target.value;
        setUserSubClass(_subClass);
        korClassNameHandler(_subClass);
        //console.log("sub:"+userSubClass);
        classSelectHandler(userMainClass, userSubClass);
    }

    const korClassNameHandler = (subClass) => {
        let _kor = DnfClass[userMainClass].filter(function(x){
            return x.value === subClass;
        });
        //console.log(_kor);
        console.log(_kor[0].name);
        setKorClassName(_kor[0].name);
        
    }


    const subClassOptions = (userMainClass) => {
        {
            DnfClass.userMainClass.map((name, index) => {
                return (
                    <option key={index + "" + name} value={index}>{name}</option>
                )
            })
        }
    }

    const addCharacterHandler = (event) => {
        let _charName = document.getElementById("characterNameInput").value;
        let _ability = document.getElementById("abilityInput").value;
        let _guildName = document.getElementById("guildNameInput").value;
        let _mainClass = userMainClass;
        let _subClass = userSubClass;
        let _charNote = document.getElementById("characterNoteInput").value;
        console.log(DnfClass);
        let _korClassName = korClassName;
        
        const newCharacter = {
            id : charCount,
            charName : _charName,
            ability : _ability,
            guildName : _guildName,
            mainClass : _mainClass,
            subClass : _subClass,
            charNote : _charNote,
            korClassName : _korClassName,
        }
        addUserCharactersHandler(newCharacter);
        
        alert(charCount+"\n"+_charName+"\n"+_ability+"\n"+_guildName+"\n"+_mainClass+"\n"+_subClass+"\n"+_charNote+"\n"+_korClassName);
        console.log("In CharInfoForm"+newCharacter);
        console.log(newCharacter);
        clearAllInput();
    }

    const clearAllInput = () => {
        document.getElementById("characterNameInput").value = "";
        document.getElementById("abilityInput").value = "";
        document.getElementById("guildNameInput").value = "";
        setUserMainClass("male_ghost_knight");
        setUserSubClass("soul_bringer");
        document.getElementById("characterNoteInput").value = "";
    }

    return (
        <React.Fragment>
            {/* 캐릭터 정보 입력창 */}
            <Container maxWidth="lg" sx={{border: '1px dashed lightgrey'}}>

                <Grid container sx={{ display: "flex", flexDirection: "row",  alignItems: "center", justifyContent: "center"}}>
                    {/* 캐릭명, 항마, 길드명 입력창 */}
                    <Grid item xs={12} sm={5} md={5} lg={5} sx={{ display: "flex", flexDirection: "row",  alignItems: "center", justifyContent: "center"}} >
                            <TextField required id="characterNameInput" label="캐릭명" variant="standard" sx={{ mr: 1 , maxWidth: 120  }} />
                            <TextField required id="abilityInput" label="항마" variant="standard" sx={{ mr: 1, maxWidth: 50 }} type="number"
                                inputProps={{ inputMode: 'decimal', step: "0.1", pattern: '[0-9].[0-9]' }} />
                            <TextField required id="guildNameInput" label="길드명" variant="standard" sx={{ maxWidth: 120 }} />
                    </Grid>

                    <Grid item xs={12} sm={5} md={5} lg={5} sx={{ display: "flex", flexDirection: "row",  alignItems: "center", justifyContent: "center"}}>
                        <Grid >
                        {/* 1차 직업 선택 창 test */}
                            <FormControl variant="standard" required id="test1" className="main-class-selector" sx={{ m: 1, maxWidth: 120 }} >
                                <InputLabel id="main-class-select">1차</InputLabel>
                                <Select
                                    defaultValue="male_ghost_knight"
                                    id="mainClassSelect"
                                    label="mainClassSelect"
                                    value={userMainClass}
                                    onChange={mainClassSelectHandler}
                                >

                                    {DnfClass && DnfClass.mainClass.map((mainClass, index) => {
                                        return (
                                            <MenuItem key={index+" "+ mainClass} value={mainClass.value}>{mainClass.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        
                        <Grid >
                            {/* 2차 직업 선택 창 test */}
                            <FormControl variant="standard" required className="sub-class-selector" sx={{ m: 1, maxWidth: 100 }} >
                                {<InputLabel id="sub-class-select">2차</InputLabel>}
                                <Select
                                    value={userSubClass}
                                    id="subClassSelect"
                                    label="subClassSelect"
                                    onChange={subClassSelectHandler}
                                >
                                    {DnfClass && DnfClass[userMainClass].map((subClass, index) => {
                                        return (
                                            <MenuItem key={index + " " + subClass.name} value={subClass.value}>{subClass.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid >
                            <TextField id="characterNoteInput" placeholder='속강 및 장비셋팅' label="비고" variant="standard" sx={{ mr: 1, maxWidth: 120}} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2} sx={{ p: 1, display:'flex', flexDirection: "row",  alignItems: "center", justifyContent: "center"}}>
                        <Button variant="contained" color="success" onClick={addCharacterHandler}>추가</Button>
                    </Grid>

                </Grid>
            </Container>
            {/*</Grid>*/}
            </React.Fragment>
    )
}

export default CharInfoForm;