import { Link } from "react-router-dom";
import BookList from "./components/BookList";

export default function BooksLayout(props) {

    return (
    <div>
      
    { //check my allbooks array
    console.log("arr is "+Array.isArray(props.AllBooks))
    } 
      {/* keep passing the updateBookShelf function till reach the book (the desired Child) */}
      {/* it is important to pass an empty array if all books isn't  an array for filter and map are used later  */}
     <BookList  AllBooks={(props.AllBooks && Array.isArray(props.AllBooks))  ? props.AllBooks : []}  updateBookShelf={props.updateBookShelf} />
     
     <div className="open-search">
     <Link to="/search"><button></button></Link>

     
     </div>

    </div>
    );
  }
  