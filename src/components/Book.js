
export default function Book(props) {
  return (
    
    <div className="book">
      <div className="book-top">

        <div className="book-cover" style={
           { width: 128, height: 193,
           backgroundImage:(props.book.imageLinks&&props.book.imageLinks.smallThumbnail) ?
           `url(${props.book.imageLinks.smallThumbnail})` : "none"
            }    }></div>

        <div className="book-shelf-changer">
          <select
              //  check if there is old shelf value  display it if no =>none
             value={props.book.shelf ? props.book.shelf : "none"}
            //  change shelf
             
             onChange={(e)=>{ console.log("old shelf  ",props.book.shelf)
               props.updateBookShelf(props.book,e.target.value);
             //display result
              console.log("Book new state   " +e.target.value+" --- "+props.book.title)
              // check if shelf is updated
              console.log("new shelf  ",props.book.shelf)
              
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
