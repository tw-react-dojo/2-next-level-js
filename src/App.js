import "./App.css";
var moment = require("moment");
var React = require("react");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      date: "",
      error: null,
      rates: []
    };
  }

  componentWillMount() {
    var that = this;
    window.$.ajax({
      url: "http://api.fixer.io/latest",
      type: "GET",
      success: function(data) {
        var newState = that.state;
        newState.loaded = true;
        newState.date = data.date;
        newState.rates = data.rates;
        that.setState(newState);
      },
      error: function(error) {
        alert("error: " + error);
      }
    });
  }

  render() {
    var loaded = this.state.loaded;
    var error = this.state.error;
    var rates = this.state.rates;
    var date = this.state.date;

    var rateComponents  = []
    for (var rate in rates) {
      rateComponents.push(React.createElement(
        "tr",
        { key: rate },
        React.createElement(
          "td",
          null,
          rate
        ),
        React.createElement(
          "td",
          null,
          rates[rate]
        )
      ))
    }

    return <div className="App">
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
          {rateComponents}
          </tbody>
        </table>
      </div>}
    </div>;
  }
}

export default App;
