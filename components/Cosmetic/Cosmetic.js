import React from 'react';
import './Cosmetic.css'
import { addtodb, removbd } from '../../utilties/addstoragedb';
const Cosmetic = (props) => {
    const {name,id,price}=props.cosmetic
    const addTocart=(id)=>{ //frist id
 
addtodb(id)
    }
    
    const removecart=id=>{
        
        removbd(id)
    }
    // const addtocartWithoaram=()=>addTocart(id)
    return (
        <div className='degin'>
            <h3> Buy this</h3>
            <h3>name:{name} </h3>
            <h3>id:{id} </h3>
            
          {/* <button onClick={addtocartWithoaram}>addd</button>  */}
          <button onClick={()=>addTocart(id)}>sortcat</button>
          <button onClick={()=>removecart(id)}> Remove</button>
        </div>
    );
};

export default Cosmetic;