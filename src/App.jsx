import './App.css';
import Footer from './Components/Footer';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesDetails from './components/Movies.Details';
import CardList from './components/CardList';
import MovieCast from './components/Movie.cast';
import RelatedMovie from './components/Related.Movie';
import SearchResults from './components/SearchResults';





function App() {



  return (
    <Router>
      <div className='app-container'>
        <Sidebar />
      </div>
      <div className='contant'>
        <Header />
      </div>
      <Routes>

        <Route path="/" element={<CardList genresId={878} />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/comedy" element={<CardList genresId={35} />} />
        <Route path="/action" element={<CardList genresId={28} />} />
        <Route path="/horror" element={<CardList genresId={27} />} />
        <Route path="/crime" element={<CardList genresId={80} />} />
        <Route path="/drama" element={<CardList genresId={18} />} />
        <Route path="/adventure" element={<CardList genresId={12} />} />
        <Route path="/mystry" element={<CardList genresId={9648} />} />
        <Route path="/thriller" element={<CardList genresId={53} />} />
        <Route path="/romance" element={<CardList genresId={10749} />} />
        <Route path="/movie/:id" element={<MoviesDetails />} />



      </Routes>

      <Footer />


    </Router>

  );
}

export default App;






