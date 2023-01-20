import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components';
import { PrivateRoute, PublicRoutes } from './routes'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/*' element={<PublicRoutes />} />
            <Route path='/admin/*' element={<PrivateRoute />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
