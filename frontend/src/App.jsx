import './App.css';
import Add from './Components/Add';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Edit from './Components/Edit';

function App() {



  return (

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Add" element={<Add/>} />
    <Route path="/Edit" element={<Edit/>} />
    </Routes>
   
  );
}

export default App;
