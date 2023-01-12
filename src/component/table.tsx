import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

interface Columns {
    // id: string;
    empId: string;
    empName: string;
    dob: string;
}

interface TableData {
    rows: Columns[];
}

const EmpTable: React.FC<TableData> = ({ rows }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>EMPLOYEE ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow
                                key={row.empId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.empId}</TableCell>
                                <TableCell>{row.empName}</TableCell>
                                <TableCell>{row.dob}</TableCell>
                                <TableCell><Link to={`/profile/${row.empId}`}>See Profile</Link></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmpTable;