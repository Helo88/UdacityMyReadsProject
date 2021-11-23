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
     for (let i =0 ;i<results.length;i++){

      for (let j =0 ;j<props.AllBooks.length;j++){
        console.log("found  "+results[i].id+"name  "+results[i].title +"current shelf "+props.AllBooks[j].shelf)
        if(results[i].id===props.AllBooks[j].id)
        {
          results[i].shelf=props.AllBooks[j].shelf;
          console.log("\n\n")
          console.log("UPDATE "+results[i].shelf)
        }

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
  