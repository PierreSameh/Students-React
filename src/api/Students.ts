
export const getStudents = async () => {
    const response = await fetch('http://localhost:3000/students');
    const data = await response.json();
    return data;
}