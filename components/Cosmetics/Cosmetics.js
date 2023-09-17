import React, { useEffect, useState } from 'react';
import { add } from '../../utilties/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
const Cosmetics = () => {
 const [cosmetics,setCosmetics]=useState([])
useEffect(()=>{
    fetch('https://cosmetic.free.beeceptor.com')
    .then(Response=>Response.json())
    .then(data=>setCosmetics(data))
},[])
    return (
        <div>
           
            
           {
            cosmetics.map(cosmetic=><Cosmetic 
                key={cosmetic.id}
                cosmetic={cosmetic}>
                </Cosmetic>)
           }
        </div>
    );
};

export default Cosmetics;