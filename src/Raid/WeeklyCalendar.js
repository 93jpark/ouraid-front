import * as React from 'react';
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DnfClass from "../DnfClass";
import MenuItem from "@mui/material/MenuItem";


function createData(date, mon, tue, wed, thu, fri, sat, sun) {
    return { date, mon, tue, wed, thu, fri, sat, sun };
}

const mockup = [
    {"date": "20220720", "boss": "8", "dungeon": "10", "clown": "0"}, //MON
    {"date": "20220721", "boss": "9", "dungeon": "12", "clown": "1"}, //TUE
    {"date": "20220722", "boss": "10", "dungeon": "11", "clown": "2"}, //WED
    {"date": "20220723", "boss": "4", "dungeon": "9", "clown": "1"}, //THU
    {"date": "20220724", "boss": "2", "dungeon": "13", "clown": "3"}, //FRI
    {"date": "20220725", "boss": "2", "dungeon": "7", "clown": "0"}, //SAT
    {"date": "20220726", "boss": "1", "dungeon": "5", "clown": "0"}, // SUN
]


const rows = [
    createData(20122025,5,4,4,1,1,2,1),
];


const WeeklyCalendar = () => {
    return (
        <React.Fragment>
            <Container fixed sx={{ minHeight:130}}>
                <TableContainer component={Paper} >
                    <Table size="small" p={1} sx={{ width: "max-content", height: "max-content"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" size="small"></TableCell>
                                <TableCell align="center" size="small">MON</TableCell>
                                <TableCell align="center" size="small">TUE</TableCell>
                                <TableCell align="center">WED</TableCell>
                                <TableCell align="center">THR</TableCell>
                                <TableCell align="center">FRI</TableCell>
                                <TableCell align="center">SAT</TableCell>
                                <TableCell align="center"><Grid sx={{ color:'red' }}>SUN</Grid></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.date}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Container sx={{ p: 1, display:'flex', flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
                                            <Grid>보스</Grid>
                                            <Grid>모험</Grid>
                                            <Grid>환영</Grid>
                                        </Container>
                                    </TableCell>

                                    {/*{DnfClass && DnfClass[userMainClass].map((subClass, index) => {*/}
                                    {/*    return (*/}
                                    {/*        <MenuItem key={index + " " + subClass.name} value={subClass.value}>{subClass.name}</MenuItem>*/}
                                    {/*    )*/}
                                    {/*})}*/}


                                    {mockup && mockup.map((day, index)=> {
                                        return (
                                            <TableCell key={day.date} align="center">
                                                <Container sx={{ p: 1, display:'flex', flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
                                                    <Grid sx={{color:'#9864D6'}}>{day.boss}</Grid>
                                                    <Grid sx={{color: '#B5651D'}}>{day.dungeon}</Grid>
                                                    <Grid sx={{ color: 'BA1141'}}>{day.clown}</Grid>
                                                </Container>
                                            </TableCell>
                                    )
                                })}

                                    {/*<TableCell align="center">{row.tue}</TableCell>*/}
                                    {/*<TableCell align="center">{row.wed}</TableCell>*/}
                                    {/*<TableCell align="center">{row.thu}</TableCell>*/}
                                    {/*<TableCell align="center">{row.fri}</TableCell>*/}
                                    {/*<TableCell align="center">{row.sat}</TableCell>*/}
                                    {/*<TableCell align="center">{row.sun}</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    )

}


export default WeeklyCalendar;