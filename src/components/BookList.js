
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
          {/* {console.log("len "+(props.AllBooks).length)}
          {console.log("arrlist is "+Array.isArray(props.AllBooks))} */}

           <BookShelf  updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && ((props.AllBooks).length > 0)) ?
           ((props.AllBooks).filter((book)=>{return book.shelf=="currentlyReading"})) :
           [] 
           } text="Currently Reading" />
               <BookShelf   updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && ((props.AllBooks).length > 0)) ?
           ((props.AllBooks).filter((book)=>{return book.shelf=="wantToRead"})) :
           [] 
           } text="Want to read" />
                 <BookShelf updateBookShelf={props.updateBookShelf} 
           AllBooks={( props.AllBooks && ((props.AllBooks).length > 0))  ?
           ((props.AllBooks).filter((book)=>{return book.shelf=="read"})) :
           [] 
           } text="Read" />
        
    
         
        </div>
      </div>
    </div>
  );
}
