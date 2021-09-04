import { Component } from "react";
import "./App.css";
//import Movies from "./components/movies";
import Counters from "./counters";
import Navbar from "./navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5, checked: false },
      { id: 2, value: 2, checked: false },
      { id: 3, value: 7, checked: false },
      { id: 4, value: 3, checked: false },
    ],
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((c) => {
        return { id: c.id, value: 0 };
      }),
    });
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value -= 1;
    this.setState({ counters });
  };

  handleDelete = (cId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== cId),
    });
  };

  handleChange = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counters[index] };
    counters[index].checked = !counters[index].checked;
    console.log(counters[index].checked);
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          counters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container text-start">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onChange={this.handleChange}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
