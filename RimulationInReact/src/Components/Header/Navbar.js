import React, { useState } from "react";
import { Link } from "react-router-dom";
import Web3Modal from "web3modal";
import { providerOptions } from "../../App";
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { ethers } from "ethers";



export default function Navbar() {
 

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [buttonText, setButtonText] = useState('Connect Wallet')
  const providerOptions = {                 
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
        infuraId: "bf991788cf55436c98beee4cc8507b46", // Required
        // rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        // chainId: 4, // Optional. It defaults to 1 if not provided
        // darkMode: false // Optional. Use dark theme, defaults to false
      }
    }
  };
  
  const web3Modal = new Web3Modal({
    network: "rinkeby", // optional
    theme:"dark",
    cacheProvider: true, // optional
    providerOptions // required
  });     
  
   const disconnectWallet = async () => {
        await web3Modal.clearCachedProvider();
    }         
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new Web3(provider);
      await window.ethereum.send('eth_requestAccounts');
      var accounts = await library.eth.getAccounts();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setButtonText("Connected");
   
    } catch (error) {
      console.error(error);
    }
    // var account = ConnectWallet();
   
    
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm  " style={{backgroundColor:'#050a3a'}}>
        <div className="container-fluid  ">
          <Link to="/home" className="navbar-brand">
            <img src="../assets/logo.png" className="img-fluid ps-5" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"    
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"  
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-3">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/map"  className="nav-link" href="#">
                  Map
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/roadmap" className="nav-link" href="#">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/whitepaper" className="nav-link" href="#">
                  Whitepaper
                </Link>
              </li>
              <button className="nav-item px-3" 
              onClick={connectWallet}> {buttonText}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Web3Model from "web3modal";
// import { WalletConnectProvider } from "@walletconnect/web3-provider";
// import { walletlink } from "web3modal/dist/providers/connectors";

// const provideroptions={
//   binancechainwallet:{
//     package:true
//   },
//   walletconnect:{
//     package:WalletConnectProvider,
//     options:{
//       infuraId:"5e880f0f32e64dfcba2231597d479497"
//     }
//   },

// }
// const web3modal= new Web3Model({
//   network:'rinkeby',
//   theme:"dark",
//   cacheProvider:true,
//   providerOptions
// })


// export default function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-sm  " style={{backgroundColor:'#050a3a'}}>
//         <div className="container-fluid  ">
//           <Link to="/home" className="navbar-brand">
//             <img src="../assets/logo.png" className="img-fluid ps-5" alt="" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse "
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav ms-auto ">
//               <li className="nav-item px-3">
//                 <Link
//                   to="/home"
//                   className="nav-link active"
//                   aria-current="page"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item px-3">
//                 <Link to="/about" className="nav-link" href="#">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item px-3">
//                 <Link to="/map" className="nav-link" href="#">
//                   Map
//                 </Link>
//               </li>
//               <li className="nav-item px-3">
//                 <Link to="/roadmap" className="nav-link" href="#">
//                   Roadmap
//                 </Link>
//               </li>
//               <li className="nav-item px-3">
//                 <Link to="/whitepaper" className="nav-link" href="#">
//                   Whitepaper
//                 </Link>
                

//               </li>
//             </ul>
//           </div>
          
//         </div>
//       </nav>
      
//     </>
//   );
// }
