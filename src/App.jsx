import {
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Footer,
} from "./containers";
import { Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <div className="container">
            <Navbar />
            <Header />
          </div>
        </div>
        <div className="container">
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <Blog />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
