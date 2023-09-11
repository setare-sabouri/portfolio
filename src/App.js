import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/main/about";
import { Skills } from "./components/skills/skills";
import { DownloadButton } from "./components/Resume/resume";
import { Projects } from "./components/Projects/Projects";
import './general.css'
function App() {
  const cvURL = process.env.PUBLIC_URL + "/resume.pdf";
  return (
    <>
      <div className=" container-fluid h-100 " >
        <Navbar />
        <div className="about">
          <About />
        </div>
        <Projects />
        <Skills />
        {/* <DownloadButton fileURL={cvURL} /> */}
      </div >

    </>
  );
}

export default App;
