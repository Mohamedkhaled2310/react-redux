import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../cake/CakeActionCreator';
import { useState } from 'react';

const CakeComponentWithHooks = ()=>{
    const NumberOfCake = useSelector((state) => state.cake.NumberOfCake);
    const buyCakeDispatch  = useDispatch();
    const [number,setNumber] = useState(1);
    return(
    <>
    <h1>Number of cakes is {NumberOfCake}</h1>
    <div className="card" >
    <input style={{padding:'10px',border:'1px solid #ccc',borderRaduis:'5px'}} type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <button onClick={()=>buyCakeDispatch(buyCake(number))}>
        Buy - {number== "" ?0:number} -  Cake 
    </button>
    </div>
    </>
    );
}

export default CakeComponentWithHooks;