import { Link } from "react-router-dom";
import BookList from "./components/BookList";

export default function Book(props) {

    return (
    <div>
        {console.log("arr is "+Array.isArray(props.AllBooks))}
     <BookList AllBooks={props.AllBooks}   updateBookShelf={props.updateBookShelf} />
     <div className="open-search">
     <Link to="/search"><button></button></Link>

     
     </div>

    </div>
    );
  }
  