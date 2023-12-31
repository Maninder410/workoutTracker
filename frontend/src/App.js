import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
// pages & components
import { useSelector } from 'react-redux';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Editworkout from './components/Editworkout';

function App() {
  const {user} = useSelector(state=>state.auth);

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ?<Home />:<Navigate to = "/login"/>} 
            />
            <Route 
              path="/login" 
              element={!user ?<Login />:<Navigate to = "/"/>} 
            />
            <Route 
              path="/signup" 
              element={!user ?<Signup />:<Navigate to = "/"/>} 
            />
        <Route path = "/edit" element = {user?<Editworkout/>:<Navigate to = "/login"/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;