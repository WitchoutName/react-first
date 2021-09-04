import { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container text-start">
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;
