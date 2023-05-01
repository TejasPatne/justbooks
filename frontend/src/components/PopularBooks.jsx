import React, { useContext } from 'react'
import BookCard from './BookCard'
import HomePoster from './HomePoster'
import { bookListContext } from '../App'

const PopularBooks = () => {

  const bookList = useContext(bookListContext);
  
  return (
    <div className='main-content'>
      <HomePoster />
      <div className='explore-sec'>
        <div className='subheading-1' id='popular-books'>Popular Books</div>
        <div className='books-sec'>
          {bookList && bookList.map((book, index) =>
            <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PopularBooks