import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './components/MainLayout';
import { Home } from './components/home';

function App() {

  return (
    // route
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
