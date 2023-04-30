import React, { useEffect, useState }  from 'react'
import BookCard from './BookCard'
import axios from 'axios'

const Comics = () => {
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

  useEffect(()=>async()=>{
    getBooks();
  }, [])
  return (
    <div className='bestseller dark-background content'>
        <div className='bestseller-2'>
            {bookList && bookList.map((book, index)=>
                book.category==="comic" ? <BookCard key={index} coverimage={book.coverpage} bookname={book.name} author={book.author} edition={book.edition} booklink={book.link}  /> : null
            )}
        </div>
    </div>
  )
}

export default Comics