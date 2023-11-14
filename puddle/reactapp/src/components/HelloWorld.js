import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class HelloWorld extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to="/react"><h1>Hello World!</h1></Link>
      </div>
    );
  }
}

export default HelloWorld;
