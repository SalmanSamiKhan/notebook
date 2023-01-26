import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <>
    {/* Wrap everything inside NoteState */}
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
