import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const EventDescription = lazy(() => import("./pages/Event"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/event" component={() => <EventDescription />} />
          <Route exact path="/404" component={() => <PageNotFound />} />
          <Route exact path="/*" component={() => <PageNotFound />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

//AIzaSyABKA8bU09dNenWLr1GAE1c_nvI0ZvY6xY
