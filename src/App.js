import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout
import Navbar from './components/Layout/Navbar';

// Pages
import Dashboard from './components/Dashboard/Dashboard';
import UploadData from './components/UploadData/UploadData';
import Reports from './components/Reports/Reports';
import Configuration from './components/Configuration/Configuration';

import './App.css';

function App() {
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <Router>
      <div className="App">
        <Navbar notificationCount={notificationCount} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadData />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/config" element={<Configuration />} />
          </Routes>
        </main>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
