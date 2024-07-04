import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
