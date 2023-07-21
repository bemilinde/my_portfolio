import 'bootstrap/dist/css/bootstrap.min.css';

import Circle_Main from "./components/Circle.js";
import Main_Layout from "./components/Main_Layout";
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe.js';
import Project1 from './pages/Project-1.js';
import Skils from './pages/Skils.js';
import Project2 from './pages/Project-2.js';
import Project3 from './pages/Project-3.js';
import Career from './pages/Career.js';
import License from './pages/License.js';
import CoverLetter from './pages/CoverLetter.js'

//Test

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={          
          <Main_Layout>
            <Circle_Main/>
          </Main_Layout>
        }/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Skils" element={<Skils/>}/>
        <Route path="/Project1" element={<Project1/>}/>
        <Route path="/Project2" element={<Project2/>}/>
        <Route path="/Project3" element={<Project3/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/License" element={<License/>}/>
        <Route path="/CoverLetter" element={<CoverLetter/>}/>
      </Routes>

    </>
  );
}

export default Home;
