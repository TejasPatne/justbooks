import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import HomePoster from './HomePoster'
import axios from 'axios'

const PopularBooks = () => {
  const [bookList, setBookList] = useState([]);
  const getBooks = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)
      setBookList(data.books);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks()
  }, [])
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