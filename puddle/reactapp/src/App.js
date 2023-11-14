import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './components/HelloWorld'; // ваш новый компонент
import StartPage from './components/StartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/react" component={StartPage} /> // маршрут для стартовой страницы
          <Route path="/hello" component={HelloWorld} /> // маршрут для новой страницы
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
