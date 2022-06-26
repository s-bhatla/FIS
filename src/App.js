import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Landing } from './components/Landing';
import Judging from './components/Judging';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing />
        <Judging />
        <Footer/>
    </div>
  );
}

export default App;
