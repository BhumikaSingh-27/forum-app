import Home from "../src/pages/Home";
import "./App.css";
import Header from "./components/Header";
import PostLanding from "./pages/PostLanding";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<PostLanding />}></Route>
      </Routes>
    </div>
  );
}

export default App;
