import React from 'react';

function UserDash() {
    // Hardcoded data for teachers
    const teachers = [
        { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', courses: ['Mathematics', 'Physics'] },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', courses: ['History', 'Literature'] },
        { id: 3, name: 'Michael Johnson', email: 'michael.johnson@gmail.com', courses: ['Biology', 'Chemistry'] },
        { id: 4, name: 'Jane Parkins', email: 'JaneParkins@gmail.com', courses: ['Computer Science', 'Psychology'] },
        { id: 5, name: 'Christine Eve', email: 'ChristineEve@gmail.com', courses: ['Business', 'Economy'] }
    ];

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <div className="absolute top-1/4 left-1/4 text-center text-gray-50">
                <h1 className="text-3xl font-bold mb-2">Hello Dear Student</h1>
                <p className="text-lg mb-2">Welcome to SkillQuest</p>
                <p className="text-lg mb-4">Here are the details of your teachers and the courses they will be teaching:</p>
            </div>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mt-20">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">Teacher Name</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">Email</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-gray-800">Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td className="py-2 px-4 border-b border-gray-200">{teacher.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{teacher.email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{teacher.courses.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDash;
