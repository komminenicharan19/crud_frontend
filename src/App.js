import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listing from './components/listing/Listing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdatePost from './components/listing/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Listing/>} />
          <Route exact path='/edit/:id' element={<UpdatePost/>} />
          {/* <Route exact path='/' element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
