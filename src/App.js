import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from './pages/Profile';

import './styles/App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <div className="flex">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
