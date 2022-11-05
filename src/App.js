import './App.css';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import ListItem from './Components/ListNotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/list" element={<ListItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
