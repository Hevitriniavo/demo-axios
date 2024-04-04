"use client";

import Link from 'next/link';
import React from 'react';

const UserTable = ({ users }) => {
    return (
        <>

            <div >
                
                <table className="table-auto border-collapse border border-blue-500">
                    <thead>
                        <tr>
                            <th className="border border-blue-500 px-4 py-2">ID</th>
                            <th className="border border-blue-500 px-4 py-2">Username</th>
                            <th className="border border-blue-500 px-4 py-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.slice().sort((a, b) => a.id - b.id).map((user) => (
                            <tr key={user.id}>
                                <td className="border border-blue-500 px-4 py-2">{user.id}</td>
                                <td className="border border-blue-500 px-4 py-2">{user.username}</td>
                                <td className="border border-blue-500 px-4 py-2">{user.role?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default UserTable;
