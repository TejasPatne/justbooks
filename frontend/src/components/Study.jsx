import React, { useContext } from 'react'
import BookCard from './BookCard'
import { bookListContext } from '../App'

const Study = () => {

  const bookList = useContext(bookListContext)

  return (
    <div className='explore-sec dark-background content'>
        <div className='books-sec'>
            {bookList && bookList.map((book, index)=>
                book.category==="study" ? <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link}  /> : null
            )}
        </div>
    </div>
  )
}

export default Study