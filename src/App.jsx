import React from 'react';
import Home from './pages/Home';
import PatientList from './pages/PatientList';
import PageToolBar from './components/Appbar/Toolbar';
import PageFooter from './components/Appbar/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


const App = () =>{
    return(
        <Router>
            <PageToolBar></PageToolBar>
                <Route path="/" exact component={Home}/>
                <Route path="/PatientList" component={PatientList}/>
            <PageFooter></PageFooter>
        </Router>
    );
}


export default App