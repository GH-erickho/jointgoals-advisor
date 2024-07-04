import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import EditProfile from './components/EditProfile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/edit-profile/:precisefp_account_id'
              element={<EditProfile />}
            />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
