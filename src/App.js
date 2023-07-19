import './App.css';
/*import "./bootstrap.css";
import "./styles.css";*/
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Blog from './components/pages/Blog';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Header />
         
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:pID" element={<Blog />} />
        </Routes>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
