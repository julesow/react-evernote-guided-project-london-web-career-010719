import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes}) => {
//  handleOnclick() {
//   console.log("clicked");
// }
 
  return (
    <ul>
      {notes.map(note => {
        return <NoteItem note={note} key={note.id} />;
      })}
    </ul>
  );
}

export default NoteList;

