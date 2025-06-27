import './App.css'
import CakeComponentWithHooks from './redux/components/CakeComponentWithHooks';
import NewItemComponent from './redux/components/NewItemComponent';
import SweetComponentWithHooks from './redux/components/SweetComponentWithHooks';
import UsersContainer from './redux/components/UsersContainer';
function App(props) {
  return (
    <>
    {/* <CakeComponentWithHooks/>
      <br />
      <br />
    <NewItemComponent cake />
      <br />
      <br />
    <SweetComponentWithHooks/> */}
    <UsersContainer/>
    </>
  )
}


export default App;
