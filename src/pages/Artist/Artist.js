import React, { propTypes, Component } from 'react';
import { DatePicker } from 'antd';
import { array } from 'prop-types';

const contextTypes = {}

class Artist extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ loading: true }, () => {
      fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query { artists { id title description } }`,
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(responseAsJson => {
          this.setState({ list: responseAsJson.data })
        })
    })
  }

  render(){
    return(

      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    )
  }
}

Artist.propTypes = propTypes;
Artist.contextTypes = contextTypes;

export default Artist;