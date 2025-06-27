import { buyCake } from '../cake/CakeActionCreator';
import { SweetActionCreator } from '../sweet/SweetActionCreator';
import { connect } from 'react-redux';




const NewItemComponent = (props) => {
console.log(props);

  return (
    <>
      <h1>Number of {props.cake?'Cake':'Sweet'} is {props.NumberOfItem}</h1>
      <div className="card">
        <button onClick={props.buyItem}>
          Buy Cake
        </button>
      </div>
    </>
  )
}

const mapSateToProps = (state,ownProps)=>{
    const NumberOfItem = ownProps.cake? state.cake.NumberOfCake:state.sweet.NumberOfSweet;
  return{
    NumberOfItem,
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const buyItem = ownProps.cake? ()=> dispatch(buyCake()) : ()=> dispatch(SweetActionCreator())
  return{
    buyItem
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(NewItemComponent);

