import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Kelly Dean Portfolio</h1>
        <div>
          {moment().format('MMMM d YYYY, h:mm:ss a' )}
        </div>
      </div>
    );
  }
}
