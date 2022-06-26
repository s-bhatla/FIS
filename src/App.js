import './App.css';
import Challenge from './components/Challenge';
import Event from './components/Event';
import Hack from './components/Hack';
import Navbar from './components/Navbar';

import Participate from './components/Participate';
import Partners from './components/Partners';
import Prize from './components/Prize';
import Work from './components/Work';
import Footer from './components/Footer';
import { Landing } from './components/Landing';
import Judging from './components/Judging';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing />
        <Hack/>
        <Challenge/>  
        <Work/>
        <Event/>
        <Participate/> 
        <Prize/>
        <Judging />
        <Partners/>
        <Footer/>
    </div>
  );
}

export default App;
