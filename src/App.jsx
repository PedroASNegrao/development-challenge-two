import React from 'react';
import Home from './pages/Home'
import PatientList from './pages/PatientList'
import PageToolBar from './toolbar/Toolbar'
import PageFooter from './toolbar/Footer'

const App = () =>{
    return(
        <>
            <PageToolBar></PageToolBar>
            <main>
                <Home></Home>
                <PatientList></PatientList>
            </main>
            <PageFooter></PageFooter>
        </>
    );
}

export default App