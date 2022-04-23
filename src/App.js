import "./App.css";
import Page from "./Page.js";
import Carousel from "./Carousel.js";
// import Card from "./Card.js";

// import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      {/* <ParallaxProvider> */}

      {/* <Header /> */}
      <Carousel />
      <Page />
      {/* <Card /> */}

      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
