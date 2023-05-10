import './App.css';
import Main from './Components/Main';
import { Navbar } from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
  <Navbar />
  <div className='wrapper'>
    <Sidebar/>
    <Main/>
  </div>
    </div>
  );
}

export default App;
