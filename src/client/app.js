var AboutPage = React.createClass({
    render: function() {
    return (
	<div>AboutPage</div>
     );
    }
});

var HomePage = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0, delta: 1};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + this.state.delta});
  },
  componentDidMount: function() {
    console.log("HomePage.componentDidMount");
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  handleClick: function(e) {
    console.log("handleClick");
    e.preventDefault();
    this.state.delta = (this.state.delta==1) ? -1:1;
  },
    render: function() {
    return (
      <div>
	<a href="#about">About</a>
	<a href="#login">Login</a>
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
	<button onClick={this.handleClick}>boom</button>
      </div>
    );
   }
});

var App = React.createClass({
    render: function() {

    var RoutePage;
    switch (this.props.route) {
      case 'login': RoutePage = LoginForm; break;
      case 'about': RoutePage = AboutPage; break;
      default:      RoutePage = HomePage;
    }

    return (
      <RoutePage />
    );
  }
});

function render () {
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.body);
}

window.addEventListener('hashchange', render);
render();
//React.render(<App />, document.body);

