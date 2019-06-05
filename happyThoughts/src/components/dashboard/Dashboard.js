import React, { Component } from 'react'
import ThoughtList from '../thoughts/ThoughtList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  
  render() {
    //Accessed via the reducer-thought list
   
    
    const { thoughts, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className = "container-fluid">
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ThoughtList thoughts = {thoughts}/>
          </div>
          
        </div>
      </div>
     </div> 
    )
  }
}

const mapStateToProps = (state) => {
 
  return {
    thoughts:state.firestore.ordered.thoughts,
    auth: state.firebase.auth
  }
}

//Attach to firestore Database to this component
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'thoughts', orderBy:['createdAt', 'desc'] }
  ])
)(Dashboard)