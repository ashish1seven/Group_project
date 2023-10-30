import React from 'react';
import Card from './card';
import  {searchData} from '../data';
const Searchlist = () => {
    return (
        <div className=''>
            <Card data={searchData[0]} />        
            <Card data={searchData[1]} />        
            <Card data={searchData[2]} />        
        </div>
    );
}

export default Searchlist;
