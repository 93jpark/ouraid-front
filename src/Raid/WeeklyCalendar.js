import * as React from 'react';
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(date, mon, tue, wed, thu, fri, sat, sun) {
    return { date, mon, tue, wed, thu, fri, sat, sun };
}

const rows = [
    createData(20122025,5,4,4,1,1,2,1),
];


const WeeklyCalendar = () => {
    return (
        <React.Fragment>
            <Container fixed sx={{backgroundColor:'lightgrey'}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">MON</TableCell>
                                <TableCell align="center">TUE</TableCell>
                                <TableCell align="center">WED</TableCell>
                                <TableCell align="center">THR</TableCell>
                                <TableCell align="center">FRI</TableCell>
                                <TableCell align="center">SAT</TableCell>
                                <TableCell align="center">SUN</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.date}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
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