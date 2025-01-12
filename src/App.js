import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage/MainPage';
import { Projects } from './components/Mainpage/Projects/Projects';
import { ProjectDetail } from './components/Mainpage/ProjectDetail/ProjectDetail'
import { About } from './components/Mainpage/about/About';
import { Skills } from './components/Mainpage/skills/skills';
import { DownloadButton } from './components/Mainpage/Resume/resume';
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<MainPage />} >
//     <Route path="/projects" element={<Projects />} />
//   </Route>

// ))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/main" element={<MainPage />} >
          <Route index element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='resume' element={<DownloadButton />} />
          <Route path="projects" >
            <Route index element={<Projects />} />
            {/* <Route path=':id' element={<ProjectDetail />} /> */}
          </Route>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
