import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';

import Home from './page/Home';
import Css from './page/Css';
import Router from './page/Router';
import StateProps from './page/StateProps';
import Deploy from './page/Deploy';

import './style.scss';

// imrr, rpce

function App() {
  // 여기는 스크립트 공간

  return (
    <BrowserRouter basename='/react_tutorial'>
      {/* 여기는 HTML 공간~ : JSX문법 */}
      <header>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/Router">Router</NavLink>
        <NavLink to="/StateProps">State & Props</NavLink>
        <NavLink to="/Deploy">Deploy</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/css" element={<Css/>} />
          <Route path="/router" element={<Router/>} />
          <Route path="/stateProps" element={<StateProps/>} />
          <Route path="/deploy" element={<Deploy/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;




