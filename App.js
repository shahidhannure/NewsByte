import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>News Summarizer</h1>
        <Switch>
          <Route path="/" exact component={NewsList} />
          <Route path="/article/:id" component={NewsDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
