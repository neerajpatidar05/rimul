import "./App.css";

/****************importing wallet connect libs*********************/
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3 from 'web3';
/******************************************************************/

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Roadmap from "./Components/RoadMap/Roadmap";
import Whitepaper from "./Components/Whitepaper/Whitepaper";
import Main from './Components/Map/Main'
import Navbar from "./Components/Header/Navbar";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "bf991788cf55436c98beee4cc8507b46" // required
    }
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Rimulation", // Required
      infuraId: "bf991788cf55436c98beee4cc8507b46" // required
      // rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      // chainId: 4, // Optional. It defaults to 1 if not provided
      // darkMode: false // Optional. Use dark theme, defaults to false
    }
  }
};

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={ <Header />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/roadmap" element={<Roadmap/>} />
        </Routes>
        <Routes>
          <Route path="/whitepaper" element={<Whitepaper/>} />
        </Routes>
        <Routes>
          <Route path="/map" element={<Main />} />
        </Routes>

        <Footer />
    </>
  );
}

export default App;







// import "./App.css";

// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import About from "./Components/About/About";
// import Footer from "./Components/Footer/Footer";
// import Roadmap from "./Components/RoadMap/Roadmap";
// import Whitepaper from "./Components/Whitepaper/Whitepaper";
// import Main from './Components/Map/Main'
// import Navbar from "./Components/Header/Navbar";
// function App() {
//   return (
//     <>
//     <Navbar/>
//         <Routes>
//           <Route path="/" element={ <Header />} />
//         </Routes>
//         <Routes>
//           <Route path="/home" element={<Header />} />
//         </Routes>
//         <Routes>
//           <Route path="/about" element={<About />} />
//         </Routes>
//         <Routes>
//           <Route path="/roadmap" element={<Roadmap/>} />
//         </Routes>
//         <Routes>
//           <Route path="/whitepaper" element={<Whitepaper/>} />
//         </Routes>
//         <Routes>
//           <Route path="/map" element={<Main />} />
//         </Routes>

//         <Footer />
//     </>
//   );
// }

// export default App;
