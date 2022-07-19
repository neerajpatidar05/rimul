import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3 from 'web3';
import { exit } from "process";

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
  
  
 export const ConnectWallet  = async() =>{
    await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);

   let bc= await window.ethereum.send('eth_requestAccounts');
   
   var accounts = await web3.eth.getAccounts();
    var account = accounts[0];
    console.log("account : ",account);
    return account;
}

    export const disconnectWallet = async () => {
        await web3Modal.clearCachedProvider();
    }         