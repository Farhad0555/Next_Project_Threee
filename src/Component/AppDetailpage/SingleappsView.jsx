'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SingleappsView = ({ app }) => {
    const [deleted, setDeleted] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${app.id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            setDeleted(true); 
        }
    };

    if (deleted) {
        return <p className="text-center mt-10 text-red-500"> App Uninstall ✅</p>;
    }

    return (
        <div className="card bg-base-100 shadow-xl mt-5 max-w-7xl mx-auto text-center">
            <div className="card-body">
                <h2 className="text-3xl font-bold">ID: {app.id}</h2>
                <p>Title: {app.title}</p>
                <p>Status: {app.completed ? "Completed" : "Pending"}</p>

                <button 
                    onClick={handleDelete}
                    className='btn btn-error w-24 mx-auto mt-4'
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default SingleappsView;