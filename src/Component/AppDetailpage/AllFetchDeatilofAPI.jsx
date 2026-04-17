"use client"
import Link from 'next/link';
import React from 'react';

const AllFetchDeatilofAPI = ({ app }) => {
    return (
        <div>
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h1 className="card-title">ID : {app.id}</h1>
                    <h2 className="card-title">Name : {app.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, amet!</p>
                    <div className="card-actions justify-center">
                        <Link href={`/apps/${app.id}`} className="btn btn-success" >
                            Install Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFetchDeatilofAPI;