import SingleappsView from '@/Component/AppDetailpage/SingleappsView';
import React from 'react';

const Idshowdetailpage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const response = await res.json();

    return (
        <div>
            <SingleappsView app={response} />
        </div>
    );
};

export default Idshowdetailpage;