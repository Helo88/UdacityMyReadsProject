import Book from "./Book";

export default function BookShelf(props) {
  // let books=[{name:"hello",author:"daom"},{name:"naruto",author:"suki"}]
  // return (
  //      <div>
  //          {books.map((book,index)=>{return <Book book={book} key={index} />})}
  //      </div>

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.text}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {/* loop  */}
            
               
                {/* <Book book={book}/> */}

                {((props.AllBooks)&&((props.AllBooks).length> 0)) ?
                 (props.AllBooks).map((book,index)=>{return <li key={index}> <Book updateBookShelf={props.updateBookShelf}  book={book}/> </li>})
                 :<li></li>
                 }
            


        </ol>
      </div>
    </div>
  );
}
