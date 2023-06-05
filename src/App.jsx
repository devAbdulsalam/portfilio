import {Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Index from './components/Index';
import Error from './components/Error';
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      className="App"
      
    >
    <Routes>
        <Route  path='/' element={<Index />} />
        <Route  path='/projects' element={<Projects/>} />
        <Route  path='/resume' element={<Resume/>} />
        <Route  path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;