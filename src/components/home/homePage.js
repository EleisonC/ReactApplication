import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div id="background">
        <div id="welcome" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">WELCOME TO YUMMY RECIPES</h1>
            <p className="lead"> A place to store your secret fomulae</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
