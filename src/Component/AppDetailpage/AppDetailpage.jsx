import React from 'react';
import AllFetchDeatilofAPI from './AllFetchDeatilofAPI';

const AppDetailpage = ({apps}) => {
    return (
        <div className='grid grid-cols-3 border-2 border-amber-900 m-5 p-5'>
            {
                apps.map((app,ind)=>
                <AllFetchDeatilofAPI key={ind} app={app}></AllFetchDeatilofAPI>
                )
            }
        </div>
    );
};

export default AppDetailpage;