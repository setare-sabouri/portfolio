import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/main/about";
import { Skills } from "./components/skills/skills";
function App() {
  return (
    <>
      <div className="container-fluid h-100 " >
        <Navbar />
        <About />
        <Skills />
      </div >

    </>
  );
}

export default App;
