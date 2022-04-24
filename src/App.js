import "./App.css";
import Page from "./Page.js";
import Carousel from "./Carousel.js";
// import Sidebar from "./Sidebar";
// import Card from "./Card.js";

// import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      {/* <ParallaxProvider> */}

      {/* <Header /> */}
      <Carousel />
      <Page />
      {/* <Sidebar /> */}

      {/* <Card /> */}

      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
