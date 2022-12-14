import React, {Suspense} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/app/";
import ErrorBoundry from "./components/error-boundry";

import {FirebaseApp} from "./services/firebase-service";
import "bootstrap";
import "font-awesome/css/font-awesome.min.css";

render(
    <ErrorBoundry>
        <Router>
            <Suspense fallback={'Loading'}>
                <FirebaseApp app={App}/>
            </Suspense>
        </Router>
    </ErrorBoundry>,
    document.getElementById("root")
);
