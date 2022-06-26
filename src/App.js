import './App.css';
import Challenge from './components/Challenge';
import Event from './components/Event';
import Hack from './components/Hack';
import Navbar from './components/Navbar';
import Participate from './components/Participate';
import Partners from './components/Partners';
import Prize from './components/Prize';
import Work from './components/Work';

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-black">
        <Navbar/>
        <Hack/>
        <Challenge/>   
        <Participate/> 
        <Prize/>
        <Partners/>
        <Work/>
        <Event/>
    </div>
  );
}

export default App;
