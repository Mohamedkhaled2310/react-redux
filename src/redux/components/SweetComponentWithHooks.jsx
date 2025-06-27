import { useDispatch, useSelector } from 'react-redux';
import {SweetActionCreator} from "../sweet/SweetActionCreator";

const SweetComponentWithHooks = ()=>{
    const NumberOfSweet = useSelector((state) => state.sweet.NumberOfSweet);
    const buySweetDispatch  = useDispatch()
    return(
    <>
    <h1>Number of Sweet is {NumberOfSweet}</h1>
    <div className="card">
    <button onClick={()=>buySweetDispatch(SweetActionCreator())}>
        Buy Sweet
    </button>
    </div>
    </>
    );
}

export default SweetComponentWithHooks;