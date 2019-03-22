import React from 'react';

// let trunc =(n)=> {
//   return (this.length > n) ? this.substr(0, n - 1) + '&hellip;' : this;
// };


// handleOnclick = () =>{

// }

const NoteList = ({note}) => (
  <li onClick={this.showNote}>
    <h2>{note.title}</h2>
    <p>{note.body}</p>
  </li>
);

export default NoteList;
