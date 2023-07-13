import React, { useState, useEffect, useContext } from 'react'
import BookCard from './BookCard'
import { bookListContext } from '../App'

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {

      //Implementing the setInterval method
      const interval = setInterval(() => {
          setCount(count - 1);
      }, 1000);

      //Clearing the interval
      if(count<=0)  clearInterval(interval)
      return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='counter'>
      <p>{count}s remaining</p>
      <p>Loading books for first time might take some time.</p>
    </div>
  );
}

const Study = () => {

  const bookList = useContext(bookListContext)

  return (
    <div className='explore-sec dark-background content'>
        <div className='books-sec'>
            {bookList? bookList.map((book, index)=>
                book.category==="study" ? <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link}  /> : null
            ):
            Counter()
            }
        </div>
    </div>
  )
}

export default Study