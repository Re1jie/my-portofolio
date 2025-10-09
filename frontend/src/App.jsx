import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/ProjectsPage';
import ArticleList from './pages/ArticleList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/article" element={<ArticleList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;