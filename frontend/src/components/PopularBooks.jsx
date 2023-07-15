import React, { useState, useEffect, useContext } from 'react'
import BookCard from './BookCard'
import HomePoster from './HomePoster'
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

const PopularBooks = () => {

  const bookList = useContext(bookListContext);
  
  return (
    <div className='main-content'>
      <HomePoster />
      <div className='explore-sec'>
        <div className='subheading-1' id='popular-books'>Popular Books</div>
        <div className='books-sec'>
          {
            bookList.length !== 0 ? 
            bookList.map((book, index) =>
              <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link} />
            ):
            Counter()
          }
        </div>
      </div>
    </div>
  )
}

export default PopularBooks