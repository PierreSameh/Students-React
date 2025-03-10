
import { useEffect, useState } from "react";
import AddStudents from "./componentes/AddStudents"
import StudentsTable from "./componentes/StudentsTable"
import { getStudents } from "./api/Students";
import { Student } from "./utils/data";

function App() {

  const [students, setStudents] = useState<Student[]>([]);


  useEffect(() => {
    getStudents().then(res => setStudents(res)).catch(err => console.error(err));
  }, []);

  return (
    <>
      <StudentsTable students={students}/>
      <AddStudents students={students} setStudents={setStudents} />
    </>
  )
}

export default App
