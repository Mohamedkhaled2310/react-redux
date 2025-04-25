import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../cake/CakeActionCreator';
import {SweetActionCreator} from "../sweet/SweetActionCreator";
const Store = () => {
    const NumberOfCake = useSelector((state) => state.cake.NumberOfCake);
    const buyCakeDispatch  = useDispatch()
    const NumberOfSweet = useSelector((state) => state.sweet.NumberOfSweet);
    const buySweetDispatch  = useDispatch()
  return (
    <>
      <h1>Number of cakes is {NumberOfCake}</h1>
      <div className="card">
        <button onClick={()=>buyCakeDispatch(buyCake())}>
          Buy Cake
        </button>
      </div>
      <br />
      <br />
      <h1>Number of Sweet is {NumberOfSweet}</h1>
      <div className="card">
        <button onClick={()=>buySweetDispatch(SweetActionCreator())}>
          Buy Sweet
        </button>
      </div>
    </>
  )
}

export default Store;