import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminDash() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/AdminDash')
            .then(result => setStudents(result.data))  // Corrected setStudents from setUsers
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
             <div className="mb-8 absolute top-[24%] left-[40%]">
                    <h1 className="text-3xl font-bold text-gray-500 mb-2">Hello Dear Admin</h1>
                    <p className="text-lg text-gray-50 mb-2">Welcome to SkillQuest</p>
                    <p className="text-lg text-gray-50 mb-4">This is the list of all registered students</p>
                </div>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">FirstName</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">LastName</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b border-gray-200">{student.firstname}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{student.lastname}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDash;
