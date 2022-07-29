import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import './App.css'

import Header from './components/header';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import FabAdd from './components/fabAdd';
import CreateEventForm from './pages/CreateEventForm';

function App() { 
  const {} = useParams
    return (
      <>
        <BrowserRouter>
          <Header />
          <FabAdd />         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<EventDetails />} />
            <Route path="/new-event" element={<CreateEventForm/>} />
          </Routes>  
        </BrowserRouter>
      </>    
    )
  }
export default App
