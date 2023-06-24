import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "../src/pages/Home";
import Comment from "./components/Comment";
import Sort  from "./components/Sort";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Sidebar />
        <Home />
        {/* <Comment /> */}
        <Sort />
      </div>
   
    </div>
  );
}

export default App;
