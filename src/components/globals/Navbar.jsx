import React from "react";

//Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const Navbar=()=>(
    <AppBar position="static" color="primary">
        <Toolbar>
            <h1>SOCCER REACT TEAM</h1>
        </Toolbar>
    </AppBar>
)

export default Navbar