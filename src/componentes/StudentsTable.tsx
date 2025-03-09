import { Student } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";

interface Props {
  students: Student[];
}

function StudentsTable(props: Props) {

  useEffect(() => {
    if(props.students.length === 5) return alert('Max Limit Reached!');
  }, [props.students]);

    return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', border: '3px solid #ccc' }}>
    <Table>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Class</TableCell>
        </TableHead>
        <TableBody>
          {props.students.map((item) => {
            return (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.class}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      </TableContainer>
    );
}
export default StudentsTable;