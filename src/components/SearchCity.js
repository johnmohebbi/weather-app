import React, { useState} from 'react';

//context
const SearchCity = (props) => {
    const [cityname,setCityname]= useState('')
    const changeH = (e) =>{
        setCityname(e.target.value)
    }
    return (
        <div className='text-center pt-7 flex justify-center items-baseline'>
            <input className='outline-none font-medium w-[70%] xs:w-[60%] sm:w-[40%] lg:w-72  placeholder:font-medium border-none p-2 rounded-tl rounded-bl' type="text" value={cityname} onChange={changeH} placeholder='City'/>
            <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium px-1 py-2 rounded-tr rounded-br' onClick={()=> props.clickHandler(cityname)} >Search</button>
        </div>
    );
};

export default SearchCity;