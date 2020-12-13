import React, { useEffect, useState } from 'react';
import ShowList from './components/ShowList';
import ProjectForm from './components/ProjectForm';
import EditAuthor from './components/LogIn';
import 'bootstrap/dist/css/bootstrap.css';
import { Router ,Link ,navigate } from '@reach/router';



function App() {
    return (  
        <div className="continer">
            <div className="row ml-5 mt-3 text-center">
                <h1 >Project Manager</h1>
            </div>

            <Router>
                <ShowList path="/" />
                <ProjectForm path="/new" />
            </Router>

        </div>
    );
}

export default App;
