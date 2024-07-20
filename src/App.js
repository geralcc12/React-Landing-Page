import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';



function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Home} exact ></Route>
        <Route path="/signin" component={SigninPage} exact></Route>
      </switch>

      <Home/>
    </Router>
  );
}

export default App;
