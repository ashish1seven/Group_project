import React from 'react';
import Card from './card';
import  {searchData} from '../data';
const Searchlist = () => {
    return (
        <div className=''>
            <Card data={searchData[0]} />        
        </div>
    );
}

export default Searchlist;
