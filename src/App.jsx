import { connect } from 'react-redux';
import './App.css'
import { buyCake } from './redux/CakeActionCreator';


function App(props) {
  return (
    <>
      <h1>Number of cakes is {props.NumberOfCake}</h1>
      <div className="card">
        <button onClick={props.buyCake}>
          Buy Cake
        </button>
      </div>
    </>
  )
}
const getCake = (state)=>{
  return{
    NumberOfCake: state.NumberOfCake
  }
}

const DispatchBuyCake = (dispatch)=>{
  return{
    buyCake : ()=> dispatch(buyCake())
  }
}


export default connect(getCake,DispatchBuyCake)(App)
