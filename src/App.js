import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Nav from './Components/Header/Nav/Nav'
import Home from "./Components/Main/Home/Home";
import Videos from './Components/Main/Videos/Videos';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Teacher from './Components/Main/Teacher/Teacher';
import Contact from './Components/Main/Contact/Contact';
import Free from './Components/Main/Free/Free';

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'> 
      <Header>
        <Nav/>
        <nav>
          hello
        </nav>
       
     </Header>
        
      <Main>
      <Routes>
             <Route path='/home' element = {<Home/>} ></Route>
             <Route exact path='/teacher/' element = {<Teacher/>} ></Route>
             <Route path='/tutorials' element = {<Videos/>} ></Route>
             <Route path='/free' element = {<Free/>} ></Route>
             <Route path='/contact' element = {<Contact/>} ></Route>
          </Routes>  
        
      </Main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
