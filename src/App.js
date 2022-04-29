import "./App.css";
import Page from "./Page.js";
import Header from "./Header.js";
import TopMenu from "./TopMenu.js";
import Carousel from "./Carousel.js";
import Footer from "./Footer.js";
import New from "./New";
// import Navbar from "./Navbar";

// import Sidebar from "./Sidebar";
// import Card from "./Card.js";

// import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      {/* <ParallaxProvider> */}
      <TopMenu />

      <Header />
      <New />

      {/* <NavMenus /> */}
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      {/* <div className="nav-area"> */}
      {/* Logo
        <Navbar />
      </div> */}
      <Carousel />
      <Page />
      <Footer />

      {/* <Sidebar /> */}

      {/* <Card /> */}

      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
