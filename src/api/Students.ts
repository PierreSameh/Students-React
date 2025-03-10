import { Student } from "../utils/data";

export const getStudents = async () => {
    const response = await fetch('http://localhost:3000/students');
    const data = await response.json();
    return data;
}


export const addStudent = async (student: Student) => {
    const response = await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    const data = await response.json();
    return data;
}