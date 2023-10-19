
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
