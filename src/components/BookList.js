
import BookShelf from "./BookShelf";
export default function BookList(props) {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>

          {console.log(props.AllBooks)}

          {/* display books with shelf name =>currentltReading */}
           <BookShelf  updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && Array.isArray(props.AllBooks)) ?
           ((props.AllBooks).filter((book)=>{return book.shelf==="currentlyReading"})) :
           [] 
           } text="Currently Reading" />
            {/* display books with shelf name =>want to read */}
            <BookShelf   updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && Array.isArray(props.AllBooks))?
           ((props.AllBooks).filter((book)=>{return book.shelf==="wantToRead"})) :
           [] 
           } text="Want to read" />
            {/* display books with shelf name =>read*/}
             <BookShelf updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && Array.isArray(props.AllBooks))?
           ((props.AllBooks).filter((book)=>{return book.shelf==="read"})) :
           [] 
           } text="Read" />
        
          {/* books with shelf state none won't be appeared  */}
         
        </div>
      </div>
    </div>
  );
}
