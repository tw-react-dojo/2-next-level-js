import React, { Component } from 'react'
import keys from 'lodash/keys'
import moment from 'moment'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      date: '',
      error: null,
      rates: []
    }
  }

  componentWillMount() {
    fetch('http://api.fixer.io/latest')
      .then(r => r.json())
      .then(({ rates, date }) =>
        this.setState({
          ...this.state,
          loaded: true,
          rates,
          date
        })
      )
      .catch(error => {
        console.log(`error: ${error}`)
        this.setState({
          ...this.state,
          loaded: true,
          error
        })
      })
  }

  render() {
    const { loaded, error, rates, date } = this.state
    return (
      <div className="App">
        <h1>Rates</h1>
        {!loaded && <span>loading rates</span>}
        {loaded && error && <span>Error getting rates!</span>}
        {loaded &&
          !error &&
          <div>
            Rates from {moment(date).fromNow()}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {keys(rates).map(rate => (
                  <tr key={rate}><td>{rate}</td><td>{rates[rate]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>}
      </div>
    )
  }
}

export default App
