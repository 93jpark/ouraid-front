import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import DnfClass from '../DnfClass';
import Button from '@mui/material/Button';

function CharInfoForm({ classSelectHandler, addUserCharactersHandler }) {
    const [userMainClass, setUserMainClass] = React.useState("male_ghost_knight");
    const [userSubClass, setUserSubClass] = React.useState("male_ghost_knight");


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
        console.log("selected");
        console.log(event.target.value);
        setUserSubClass(event.target.value);
        console.log("sub:"+userSubClass);
        classSelectHandler(userMainClass, userSubClass);
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
        
        const newCharacter = {
            charName : _charName,
            ability : _ability,
            guildName : _guildName,
            mainClass : _mainClass,
            subClass : _subClass,
            charNote : _charNote
        }
        addUserCharactersHandler(newCharacter);
        
        alert(_charName+"\n"+_ability+"\n"+_guildName+"\n"+_mainClass+"\n"+_subClass+"\n"+_charNote);
        clearAllInput();
    }

    const clearAllInput = () => {
        document.getElementById("characterNameInput").value = "";
        document.getElementById("abilityInput").value = 0;
        document.getElementById("guildNameInput").value = "";
        setUserMainClass("male_ghost_knight");
        setUserSubClass("soul_bringer");
        document.getElementById("characterNoteInput").value = "";
    }

    return (
        <Grid container>
            {/* 캐릭터 정보 입력창 */}
            <Grid id="" item p={1} xs={12} mt={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "space-between", border: '0.5px dashed lightgrey'}} >
                <Grid item sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
                    <TextField required id="characterNameInput" label="캐릭명" variant="standard" sx={{ mr: 1, width: 100 }} />
                    <TextField required id="abilityInput" label="항마" variant="standard" sx={{ width: 70, mr: 1 }} type="number" defaultValue={0}
                        inputProps={{ inputMode: 'decimal', step: "0.1", pattern: '[0-9].[0-9]' }} />
                    <TextField required id="guildNameInput" label="길드명" variant="standard" sx={{ mr: 1, width: 100 }} />
                </Grid>

                <Grid item sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "space-between" }}>
                    {/* 1차 직업 선택 창 test */}
                    <FormControl variant="standard" required id="test1" className="main-class-selector" sx={{ m: 1, minWidth: 70 }} size="small">
                        <InputLabel id="main-class-select">
                            1차
                        </InputLabel>
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

                    {/* 2차 직업 선택 창 test */}
                    <FormControl variant="standard" required className="sub-class-selector" sx={{ m: 1, minWidth: 80 }} size="small">
                        <InputLabel id="sub-class-select">2차</InputLabel>
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
                    <TextField id="characterNoteInput" placeholder='속강 및 장비셋팅' label="비고" variant="standard" sx={{ mr: 1, minWidth: 120 }} />
                </Grid>
                <Grid>
                <Button variant="contained" color="success" onClick={addCharacterHandler}>추가</Button>
                </Grid>
                
            </Grid>
            

        </Grid>
    )
}

export default CharInfoForm;