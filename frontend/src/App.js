import './App.css';
import PopularBooks from './components/PopularBooks';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Novels from './components/Novels';
import Comics from './components/Comics';
import Study from './components/Study';
import Uploader from './components/s3/Uploader';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const bookListContext = React.createContext()

function App() {

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
    <div className="App dark-background">
      <BrowserRouter>
        <bookListContext.Provider value={bookList}>
          <Navbar />
          <Routes>
            <Route path='/' element={<PopularBooks />} />
            <Route path='/novels' element={<Novels />} />
            <Route path='/study' element={<Study />} />
            <Route path='/comics' element={<Comics />} />
            <Route path='/uploader' element={<Uploader />} />
          </Routes>
        </bookListContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
