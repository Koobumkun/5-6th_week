import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";
import styled from 'styled-components';

const RootWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`

function App() {
  return (
    <RootWrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RootWrap>
  );
}

export default App;