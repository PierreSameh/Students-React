import { Button, Paper, TextField } from "@mui/material";
import { data, Student } from "../utils/data";
import { useEffect, useState } from "react";
import { addStudent } from "../api/Students";

interface Props {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

function AddStudents({ students, setStudents }: Props) {
  // Define state for form data
  const [formData, setFormData] = useState<Student>({
    id: data.length + 1,
    name: "",
    age: 0,
    email: "",
    class: "",
  });

  // Effect to update ID when students list changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, id: students.length + 1 }));
  }, [students]);

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) || 0 : value, // Ensure age is a number
    }));
  };

  // Handle form submission
  const handleSubmit = async() => {
    if (!formData.name || !formData.age || !formData.email || !formData.class) {
      alert("Please fill all the fields");
      return;
    }

    const data = await addStudent(formData);
    setStudents([...students, data]);
    // Reset form after submission
    setFormData({
      id: students.length + 2, // Set ID dynamically
      name: "",
      age: 0,
      email: "",
      class: "",
    });
  };

  return (
    <Paper
      component="form"
      sx={{
        width: "25ch",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        marginTop: "50px",
        gap: 1,
        flexDirection: "column",
        padding: "10px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={formData.name}
        onChange={handleChange}
        id="name"
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        value={formData.age || ""}
        onChange={handleChange}
        id="age"
        label="Age"
        name="age"
        variant="outlined"
        type="number"
      />
      <TextField
        value={formData.email}
        onChange={handleChange}
        id="email"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        value={formData.class}
        onChange={handleChange}
        id="class"
        label="Class"
        name="class"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained" sx={{ marginTop: "10px" }}>
        Submit
      </Button>
    </Paper>
  );
}

export default AddStudents;
