import Book from "./Book";

export default function BookShelf(props) {


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.text}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {/* loop  */}
            
               
                {/* keep passing the updateBookShelf function till reach the book (the desired Child) */}

                {(props.AllBooks) ?
                 (props.AllBooks).map((book,index)=>{return <li key={index}> <Book updateBookShelf={props.updateBookShelf}  book={book}/> </li>})
                 :<li></li>
                 }
            


        </ol>
      </div>
    </div>
  );
}
