import Header from "./components/Header";
import Home from "./components/pages/Home";
import Documentation from "./components/pages/Documentation";
import Tutorials from "./components/pages/Tutorials";
import AboutUs from "./components/pages/AboutUs";
import {Routes, Route} from 'react-router-dom';
import './style/index.css';

function App() {
  return (
    <>
      <Header title="React" />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/documentation" element={<Documentation/>}/>
          <Route exact path="/tutorials" element={<Tutorials/>}/>
          <Route exact path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
