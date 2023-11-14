import React from 'react';
import { Link } from 'react-router-dom';

class StartPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Это стартовая страница</h1>
        <Link to="/hello">Hello World</Link> // ссылка на новую страницу
      </div>
    );
  }
}

export default StartPage;
