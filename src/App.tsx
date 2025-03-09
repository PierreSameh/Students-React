
import { useState } from "react";
import AddStudents from "./componentes/AddStudents"
import StudentsTable from "./componentes/StudentsTable"
import { data } from "./utils/data";

function App() {

  const [students, setStudents] = useState(data);

  return (
    <>
      <StudentsTable students={students}/>
      <AddStudents students={students} setStudents={setStudents} />
    </>
  )
}

export default App
