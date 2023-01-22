import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';

function App() {
  return (
    <>
    {/* Wrap everything inside NoteState */}
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
