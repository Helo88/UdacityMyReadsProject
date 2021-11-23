import { Link } from "react-router-dom";
import { useState } from "react";
import "../BooksAPI";
import { search } from "../BooksAPI";
import Book from "./Book";

export default function SearchBooks(props) {
  
  let[AllSearchBooks,getAllBooks]=useState([]) 
  let[query,updateQuery]=useState("") 

  function searchBooks(query){
    updateQuery(query)
    console.log("query "+query)
    search(query).then((results) => {
      
      console.log("inside my search")
      console.log(AllSearchBooks)
      console.log("all my bboks from serach tab")
      console.log(props.AllBooks)
      if(results&&Array.isArray(results)){
      let j=0;
      for (let res of results){
      while (j<props.AllBooks.length){
        console.log("found  "+res.id+"name  "+res.title +"current shelf "+props.AllBooks[j].shelf)
        if(res.id===props.AllBooks[j].id)
        {
          res.shelf=props.AllBooks[j].shelf;
          console.log("\n\n")
          console.log("UPDATE "+res.shelf)
        }
        j++;
      }
    }
  }
    getAllBooks(results)
  })
  }

  // console.log(AllSearchBooks)      
    return (
        <div className="search-books">
        <div className="search-books-bar">
         <Link to="/"> <button className="close-search"> 
           </button> </Link>
          
       
          <div className="search-books-input-wrapper">
            {
            }
            <input type="text" placeholder="Search by title or author" value={query}
               onChange={(e)=>{searchBooks(e.target.value);
               console.log("serached ")
               console.log(AllSearchBooks)
              //  AllSearchBooks=AllSearchBooks.sort();
              //  getAllBooks(AllSearchBooks)
            }}
              
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {/* search results */}
              
              {  ((AllSearchBooks)&&(Array.isArray(AllSearchBooks)))?
                (AllSearchBooks).map((book,index)=>{return <li  key={index}> <Book updateBookShelf={props.updateBookShelf}  book={book}/> </li>})
                :<li></li>
                }
              
          </ol>
        </div>
      </div>
   
    );
  }
  