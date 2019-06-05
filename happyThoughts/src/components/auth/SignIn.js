import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.props);
   

    console.log("signin.js");
   
  }
  render() {
    const { authError, auth } = this.props;
    
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <div className = "row">
        <div class = "col-md-6"></div>
        <div class = "col-md-6">
           <div className = "form-wrapper">    
              <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3 text-center">Happy Thoughts</h5>
                <h6 className = "text-center"> All your thoughts, now all in one place :)</h6>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id='password' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn btn-block pink lighten-1 z-depth-0">Login</button>
                  <div className="center red-text">
                    { authError ? <p>{authError}</p> : null }
                  </div>
                </div>
              </form>
              </div> 
            </div>  
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SignIn)