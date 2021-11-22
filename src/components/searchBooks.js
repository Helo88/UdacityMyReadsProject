import { Link } from "react-router-dom";
import { useState } from "react";
import "../BooksAPI";
import { mySearch } from "../BooksAPI";
import Book from "./Book";

export default function SearchBooks(props) {
  
  let[AllBooks,getAllBooks]=useState([]) 
  let[query,updateQuery]=useState("") 

  function searchBooks(query){
    updateQuery(query)
    mySearch(query).then((booksList) => {
      getAllBooks(booksList)
      })
      console.log(AllBooks)
  }
                
    return (
        <div className="search-books">
        <div className="search-books-bar">
         <Link to="/"> <button className="close-search"> 
           </button> </Link>
        {/* //    onClick={() => this.setState({ showSearchPage: false })} */}
       
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={query}
            onChange={(e)=>{searchBooks(e.target.value)}}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {/* search results */}
              
              {  ((AllBooks)&&(AllBooks).length> 0 )?
                (AllBooks).map((book,index)=>{return <li  key={index}> <Book updateBookShelf={props.updateBookShelf}  book={book}/> </li>})
                :<li></li>
                }
              
          </ol>
        </div>
      </div>
   
    );
  }
  