import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ServerSelect = ( { userServerSelectHandler }) => {
    
    const [userServer,setUserServer] = React.useState("");


    const selectHandler = (event) => {
        const serverName = event.target.value;
        console.log(serverName);
        setUserServer(serverName);
        userServerSelectHandler(serverName);
    }

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="server-select-label" sx={{ mb: 1 }}>서버</InputLabel>
            <Select
                labelId="server-select-label"
                id="server-select"
                label="서버"
                value={userServer}
                onChange={selectHandler}
            >
                <MenuItem value="shusia">슈시아</MenuItem>
                <MenuItem value="shylock">샤일록</MenuItem>
                <MenuItem value="canna">칸나</MenuItem>
                <MenuItem value="ophelia">오필리아</MenuItem>
                <MenuItem value="iris">아이리스</MenuItem>
                <MenuItem value="zeldin">젤딘</MenuItem>
                <MenuItem value="mintai">민타이</MenuItem>
                <MenuItem value="parris">패리스</MenuItem>
            </Select>
        </FormControl>
    )
}


export default ServerSelect;