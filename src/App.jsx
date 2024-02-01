import { BrowserRouter, Routes, Route, useRouteError } from 'react-router-dom';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Furniture from './pages/Furniture';
import Branding from './pages/Branding';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/branding' element={<Branding />} />
          <Route path='/furniture' element={<Furniture />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
