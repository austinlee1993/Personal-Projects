import React, { Component } from 'react'
import ThoughtSummary from './ThoughtSummary'
import firebase from 'firebase/app'


class ThoughtList extends Component{

  constructor(props){
    super(props);
    
    this.onDelete = this.onDelete.bind(this);
  }


  onDelete(id){
    const db = firebase.firestore();
    db.collection('thoughts').doc(id).delete();
  }


  render(){
    var {thoughts} = this.props;

    var authorId = firebase.auth().currentUser.uid;
    
    if(thoughts){
      
      thoughts = thoughts.filter(function (item) {
        return item.authorId.includes(authorId);
      });
     
    }

    
    return (
          <div className="project-list section">
         
           {thoughts && thoughts.map(thought => {
                
              return(
                <ThoughtSummary thought = {thought} key = {thought.id}  onDelete = {this.onDelete}></ThoughtSummary>
              )
      
           })}
           </div>
    )
  }
}



// 
  
//   console.log("thought-list");
 
  
//   return (
//     <div className="project-list section">
     
   
//      {thoughts && thoughts.map(thought => {
          

        
//         return(
//           <ThoughtSummary thought = {thought} key = {thought.id} ></ThoughtSummary>
//         )

//      })}

      
      
//     </div>
//   )
// }





// const ThoughtList = ({thoughts}) => {
  
//   console.log("thought-list");
 
  
//   return (
//     <div className="project-list section">
     
   
//      {thoughts && thoughts.map(thought => {
          

        
//         return(
//           <ThoughtSummary thought = {thought} key = {thought.id} ></ThoughtSummary>
//         )

//      })}

      
      
//     </div>
//   )
// }

export default ThoughtList