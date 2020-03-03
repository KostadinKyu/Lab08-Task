import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../home/Home';

const NoMatch = () => (
  <div className="app-content">
    <h3>
      URL address <code>{window.location.pathname}</code> not match.
    </h3>
  </div>
);

interface IProps {
}

interface IState {
}

class Content extends React.Component<IProps, IState> {

  public render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route exact path="/index.html" component={props => <Home {...props} />} />
          <Route exact path="/home" component={props => <Home {...props} />} />
          <Route component={NoMatch} />
        </Switch>
      </>
    )
  }
}

export default Content;
