import {React,useEffect} from 'react'
import { connect } from 'react-redux';
import  {fetchUser}  from '../user/ActionsCreator';


const UsersContainer = ({userData,fetchUsers}) => {
    useEffect(() => {
      fetchUsers();
    }, []);
  return (
    <>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : userData ? (
        <div>
          <h2>Users List</h2>
          <ul>
            {userData.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No Users Found</h2>
      )}
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)