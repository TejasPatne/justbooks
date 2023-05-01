import './App.css';
import PopularBooks from './components/PopularBooks';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Novels from './components/Novels';
import Comics from './components/Comics';
import Study from './components/Study';
import Uploader from './components/s3/Uploader';

function App() {
  return (
    <div className="App dark-background">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PopularBooks/>} />
          <Route path='/novels' element={<Novels/>} />
          <Route path='/study' element={<Study/>} />
          <Route path='/comics' element={<Comics/>} />
          <Route path='/uploader' element={<Uploader/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
