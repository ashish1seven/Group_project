import React from 'react';
import { Link } from 'react-router-dom';


const Findevents = () => {
    return (
        <div>
            <Link to={`find/`}>
                
                <h1 className='text-5xl'>Find Events</h1>
            </Link>
        </div>
    );
}

export default Findevents;
