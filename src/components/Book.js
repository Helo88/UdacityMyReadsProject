import { useState } from "react";

export default function Book(props) {
  let[bookState,changeBookState]=useState("");
  return (
    
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193,
           backgroundImage:`url(${props.book.imageLinks.smallThumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select
             value={props.book.shelf ? props.book.shelf : "none"}
             onChange={(e)=>{props.updateBookShelf(props.book,e.target.value);
             
             console.log("Book state   " +e.target.value+"---"+props.book)
          }}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{
        ((props.book.authors)&&((props.book.authors).length)>1)?
        (props.book.authors).join(",")
        :(props.book.authors)}</div>
    </div>
 
  );
}
