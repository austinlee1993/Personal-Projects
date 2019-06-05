import React, { Component } from 'react'
import { createThought } from '../../store/actions/thoughtActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateThought extends Component {
  state = {
    title: '',
    content: ''
  }
  //set input to the fields - handle change
  handleChange = (e) => {
    this.setState({
      //set state this is essentially the input
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //send to dispatch -> send state
    this.props.createThought(this.state);
    this.props.history.push('/');
  }
  render() {
    //destructuring
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    
    return (
     <div className = "container-fluid">
      <div className="container">
        <div className = "form-wrapper">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 text-center">Create a New Thought</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Thought Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Thought Content</label>
          </div>
          <div className="input-field">
            <button className="btn btn-block pink lighten-1">Create</button>
          </div>
        </form>
        </div>
      </div>
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state-props");
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  console.log("dispatch-props");
  return {
    createThought: (thought) => dispatch(createThought(thought))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateThought)