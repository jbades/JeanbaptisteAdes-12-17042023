import React from 'react'
import { createRoot } from 'react-dom/client'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import './styles/sass/_main.scss';
import Dashboard from './react/pages/Dashboard/Dashboard';
import Error from './react/pages/Error/Error';
import Header from './react/layouts/Header/Header';
import Sidebar from './react/layouts/Sidebar/Sidebar';

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <Header />
      </header>
      <section className='section__main'>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/user/:id" element={<Dashboard/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </main>
      </section>
    </Router>
  </React.StrictMode>
);