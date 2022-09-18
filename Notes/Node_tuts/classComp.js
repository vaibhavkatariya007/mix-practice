class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <strong>Count: {this.state.count}</strong>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}
