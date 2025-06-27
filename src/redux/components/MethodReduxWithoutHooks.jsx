// import { buyCake } from './redux/cake/CakeActionCreator';
// import { connect } from 'react-redux';




// const MethodReduxWithoutHooks = (props) => {

//   return (
//     <>
//       <h1>Number of cakes is {props.NumberOfCake}</h1>
//       <div className="card">
//         <button onClick={props.buyCake}>
//           Buy Cake
//         </button>
//       </div>
//     </>
//   )
// }

// export default connect(getCake,DispatchBuyCake)(MethodReduxWithoutHooks);


// const getCake = (state)=>{
//   return{
//     NumberOfCake: state.NumberOfCake
//   }
// }

// const DispatchBuyCake = (dispatch)=>{
//   return{
//     buyCake : ()=> dispatch(buyCake())
//   }
// }