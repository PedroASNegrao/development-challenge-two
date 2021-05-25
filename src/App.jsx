import React from 'react';
import Home from './pages/Home';
import PatientList from './pages/PatientList';
import InsertPatient from './pages/InsertPatient'
import PageToolBar from './components/Appbar/Toolbar';
import PageFooter from './components/Appbar/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const App = () =>{
    return(
        <Router>
            <PageToolBar></PageToolBar>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/PatientList"> Patient List</Link>
                    </li>
                    <li>
                        <Link to="/InsertPatient">Insert Patient</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/PatientList" component={PatientList}/>               
                <Route path="/InsertPatient" component={InsertPatient}/>               
            </Switch>
            <PageFooter></PageFooter>
        </Router>
    );
}


export default App