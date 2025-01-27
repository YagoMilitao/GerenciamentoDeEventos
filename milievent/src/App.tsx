import React, { lazy, Suspense } from "react";
import NewButton from "./components/button/Button";
import ButtonAppBar from "./components/toolbar/Toolbar";
import EnhancedTable from "./components/table/table";
import { Toolbar } from "@mui/material";
import ChooseAction from "./screens/ChooseAction";
import NewEvent from "./screens/NewEvent";
import MyEvents from "./screens/MyEvents";
import { Home, Login } from "@mui/icons-material";
import Navbar from "./components/navbar/Navbar";
import Event from "./screens/Event";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ButtonBaseDemo from "./components/complexButton/ComplexButton";
import ComplexButton from "./components/complexButton/ComplexButton";
import HomeScreen from "./screens/HomeScreen";
//import { Route, Switch } from 'react-router-dom';

//const LazyAboutPage = lazy(() => import('./components/aboutPage/AboutPage')); 

const App: React.FC = () => {
  
  return (
   <Router>
    <Navbar />
    <Routes>
       
      <Route path="/" element={<HomeScreen />} />
      <Route path="/event" element={<Event />} />
      <Route path="/my-events" element={<MyEvents />} />
      <Route path="/new-event" element={<NewEvent />} />
      <Route path="/choose-action" element={<ChooseAction />} />
    </Routes>
    </Router>
 

  );
};

export default App;
