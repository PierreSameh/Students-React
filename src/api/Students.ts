import { Student } from "../utils/data";
import { API_BASE_URL } from "../config";
export const getStudents = async () => {
    try{
        const response = await fetch(`${API_BASE_URL}/students`);
        const data = await response.json();
        if(!response.ok){
            throw new Error(`${response.statusText}: ${response.status}`);
        }
        return data;
        
    } catch (error){
        console.error(error);
    }
}


export const addStudent = async (student: Student) => {
    try{
        const response = await fetch(`${API_BASE_URL}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error(`${response.statusText}: ${response.status}`);
        }
        return data;
    } catch (error){
        console.error(error);
    }
}