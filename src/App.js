import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Feedback from './Components/Feedback';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        {/* <Route path='/feedback' element={<Feedback/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
