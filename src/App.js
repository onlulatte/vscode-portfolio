import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import Main from "./pages/Main";
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Coinbox from './pages/Coinbox';
import Deposit from './pages/Deposit';
import Resume from './pages/Resume';

import './styles/App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <div className="flex">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/coinbox" element={<Coinbox />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
