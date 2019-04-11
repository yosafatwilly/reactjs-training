import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render(){
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    const {user} = this.props;
    if(!user){
      return null;
    }

    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = (state, owProps) => {
  return {user: state.users.find((user) => user.id === owProps.userId)};
}
 
export default connect(mapStateToProps, {fetchUser})(UserHeader);