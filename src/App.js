import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<FirstPage></FirstPage>} />
          <Route path="/details" element={<SecondPage></SecondPage>} />
          <Route exact path="/" element={<FirstPage></FirstPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
