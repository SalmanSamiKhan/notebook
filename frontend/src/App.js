import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer'

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      {/* Wrap everything inside NoteState */}
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route path='/about' element={<About />} />
              <Route path='/signup' element={<Signup showAlert={showAlert} />} />
              <Route path='/signin' element={<Signin showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
      <Footer />
    </>
  );
}

export default App;
