import React, { lazy, Suspense } from "react";
import NewButton from "./components/button/Button";
import ButtonAppBar from "./components/toolbar/Toolbar";
import EnhancedTable from "./components/table/table";
import { Toolbar } from "@mui/material";
import ChooseAction from "./screens/ChooseAction";
import NewEvent from "./screens/NewEvent";
//import { Route, Switch } from 'react-router-dom';

//const LazyAboutPage = lazy(() => import('./components/aboutPage/AboutPage')); 

const App: React.FC = () => {
  
  return (
    <>
    <NewEvent />
    </>

  );
};

export default App;
