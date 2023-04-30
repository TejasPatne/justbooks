import React from 'react'

const BookCard = ({coverimage, bookname, author, edition, booklink}) => {
  const coverlink = coverimage!==""? coverimage : `${process.env.REACT_APP_DEFAULT_COVERPAGE}` ;
  const bookAuthor = author!==""? author : "unknown";
  const bookName = bookname!==""? bookname : "unknown";
  const bookEdition = edition!==""? edition : "unknown";
  return (
    <div className='book-card dark-background'>
        <img src={coverlink} alt="coverimage" />
        <div className='book-info'>
            <h2>{bookName}</h2>
            <p>Edition: {bookEdition}</p>
            <p>Author: {bookAuthor}</p>
        </div>
        <a href={`${process.env.REACT_APP_OAC}/${booklink}`}><button>Download</button></a>
    </div>
  )
}

export default BookCard