import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewUser from './elements/NewUser'
import Home from './elements/Home';
function App() {
   
      return (
        <div className="App">
          <ToastContainer position='top-center'/>
          <div className='card'>
            <div className='card-header'>
              <h3>Add new user.</h3>
            </div>
            <div className='card-body'>
                      <Router>
                        <Routes>
                          <Route exact path="/" element={<Home />}></Route>
                          <Route path="/new-user" element={<NewUser />}></Route>
                        </Routes>
                     </Router>
            </div>
          </div>
        </div>
      );
      
  }

export default App;
