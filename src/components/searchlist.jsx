import React from 'react';
import Card from './card';
import  {searchData} from '../data';
const Searchlist = () => {
    return (
        <div className='flex flex-wrap m-6 w-[1200px] flex-row'>
            <Card data={searchData[0]} />        
            <Card data={searchData[1]} />        
        </div>
    );
}

export default Searchlist;
