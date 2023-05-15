import Navbar from './components/Navbar/navbar.jsx'
import Text from './components/text/text.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className='app-text__bg'>
    <Text/>
    </div>
    </div>
  );
}

export default App;
