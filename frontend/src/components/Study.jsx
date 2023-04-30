import React, { useEffect, useState }  from 'react'
import BookCard from './BookCard'
import axios from 'axios'

const Study = () => {
  const [bookList, setBookList] = useState([]);
  const getBooks = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`)
      setBookList(data.books);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getBooks()
  },[])

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