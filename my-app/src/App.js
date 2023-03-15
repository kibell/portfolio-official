
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import Landing from './components/landing';
import About from './components/about';
import Work from './components/work';
import Education from './components/education';
import Footer from './components/Footer';
import Skill from './components/skills'
import Blog from './components/blog'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Theme/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme/theme"
import Toggle from "./components/Theme/toggler"
import './App.css';
import { Fragment } from 'react';
import  {useDarkMode} from "./components/Theme/useDarkMode"

function App() {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

   <Fragment>
        <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
     
   <NavBar/>
   <Sidebar/>
   <Toggle className="float-right" theme={theme} toggleTheme={themeToggler} />
   <div className='container'>
   <Landing/>
   <About/>
   <Work/>
   <Skill/>
   <Education/>
    <Blog/>
   
   </div>
   <Footer/>
   </>
    </ThemeProvider>
   </Fragment>
      
    
  );
}

export default App;
