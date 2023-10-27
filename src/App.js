
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Findevents from './pages/findevents';
import Createevents from './pages/createevents';

function App() {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/find' element={<Findevents />} />
          <Route path='/create' element={<Createevents />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
