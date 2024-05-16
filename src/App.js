import logo from './logo.svg';
import './App.css';

import Homepage from './Components/Pages/Homepage/index'
import Navbar from './Components/Navbar/index'
import About from './Components/Pages/About/index'
// import Utilities from './Components/Pages/Utilities/index'
import Favoriate from './Components/Pages/Favor';
import Details from './Components/Pages/Details';
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes,Router,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<About />} 
          />
          <Route
            path='/Recipe'
            element={<Homepage />}

  />
          <Route
            path='/Favouriate'
            element={
              <Favoriate />
            } />
          <Route
            path='/Recipe-item/:id'
            element={
              <Details />
            } />


        </Routes>
      </div>
    </div>
  );
}

export default App;
