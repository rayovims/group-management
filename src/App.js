import React from 'react';
import Header from './Common/Components/Header/header';
import Body from './Common/Components/Body/body';

export default class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Body/>
          </div>
        </div>
      </div>
    )
  }
}