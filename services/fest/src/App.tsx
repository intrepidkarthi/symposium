import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const EventDescription = lazy(() => import("./pages/Event"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
console.log(Home);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>This is a fallback, Lol. Deal with it!</h1>}>
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
