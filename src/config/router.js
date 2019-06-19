import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

function navigations(){
    return(
        <Router>
            <div>
                {/* <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/topics" component={Topics} /> */}
            </div>
        </Router>
    )
}
export default navigations;