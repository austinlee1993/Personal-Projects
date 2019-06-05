import React, { Component } from 'react'
import moment from 'moment'

class ThoughtSummary extends Component{
   
  constructor(props){
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(){

    const{id} = this.props.thought;
   
    this.props.onDelete(id);
  }

   render(){

    const {thought} = this.props;
  
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <a className = "delete-btn" onClick = {this.onDelete} >x</a>
          <span className="card-title ">{thought.title}</span>
          <p>{thought.content}</p>
          <p className="grey-text thoughtTime">{moment(thought.createdAt.toDate()).calendar()}</p>
          
         
        </div>
      </div>
    )
   }
  
  }



// const ThoughtSummary = ({thought}) => {
   
//   console.log("thoughtSummary");
//   console.log(thought.id);

//   return (
//     <div className="card z-depth-0 project-summary">
//       <div className="card-content grey-text text-darken-3">
       
//         <span className="card-title ">{thought.title}</span>
//         <p>{thought.content}</p>
//         <p className="grey-text thoughtTime">{moment(thought.createdAt.toDate()).calendar()}</p>
//         {/* <a onClick = {() => styleMedia.display == "none"}>Delete</a> */}
       
//       </div>
//     </div>
//   )
// }

export default ThoughtSummary
