import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import Tv from './pages/Tv/Tv.jsx';
import NotFound from './pages/NotFound/NotFound';
import ById from './components/ById/ById.jsx';
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css'

function App() {

  return (
    <div className='app-container'>
      <Header />
      <Content>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='movies' element={<Movies />}/>
            <Route path=':type/:id' element={<ById />}/>
            <Route path='tv' element={<Tv />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </Content>
      <Footer />
    </div>
  )
}

export default App;
