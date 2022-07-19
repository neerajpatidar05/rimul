import React from "react";
import Navbar from "../Header/Navbar";
import AbsoluteRelative from "../Pages/AbsoluteRelative";
import "./about.css";
export default function About() {
  return (
    <>
      {/* 1st content  */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(./assets/about1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="row m-0 about1row">
          <div className="col">
            <p className="aboutus1">-About Us</p>
            <h1 className="text-white">
              Technology to Simulate <br /> the Entire World Economy
            </h1>
            <p className="">
              The technology lead Real-World Simulation <br />
              by salling land into the Digital world.
            </p>
            <button className="aboutbtn">Learn more{"->"} </button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(./assets/about2.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="row m-0 about2row">
          <div className="col text-center">
            <h2>WHO WE ARE</h2>
            <img src="../assets/about3.png" alt="black" />
            <p>
              We are Techology which operates landloard, building, and
              architects etc and will participate in development of the Georim
              we will also be introducing goods that are manufactured in
              Rimulation at the subsequent levels
            </p>
          </div>
          <div className="col text-center">
            <h2>WHAT WE DO</h2>
            <img src="../assets/about3.png" alt="black" />
            <p>
              we are offering a Geo-NFT token that allows the online transfer of
              ownership to be sent directly from one party to another without
              going through a central authority. we Building a transprent and
              trustless system in which user can indulge themselves directly in
              the process of land exchange from anywhere in the world between
              each other instantly using Georims
            </p>
          </div>
          <div className="col text-center">
            <h2>WHAT NEXT</h2>
            <img src="../assets/about3.png" alt="black" />
            <p>
              our goal and vision are always tried to the objective to provide
              best NFT token for our user We believe to offering a Unique speace
              on the earth in the tile bases So there is no benefit for any of
              the end users involved to switch their roles according to the
              situation. (ie) virtual connector can only be a virtual connector
              likewise a owner can only be an owner.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd content  */}
      <div className="container-fluid ">
        <div className="row about3">
          <div className="col">
            <img src="../assets/about4.png" alt="boy" />
          </div>
          <div className="col">
            <h1>
              Building an Digital <br /> World
            </h1>
            <p>
              A pure version of electronic geo NFT(non-fungible tokens tokens
              (Georim) would allow online transfer of ownership to be sent
              directly from one party to another without going through a central
              authority. Georim Tokens are provided as part of the solution
              where these tokens can be bought at an auction or with a native
              coin (Rimule or RILE) or swapped with other Georims for relative
              values. We propose a solution by linking the earth’s area to
              Georim using geo coordinates. A Georim contains an area in sq.
              feet with respect to satellite maps; this will eventually lead to
              a technology called Rimulation (Real-World Simulation).
            </p>
          </div>
        </div>
      </div>
      {/* 4th content  */}
      <div className="container-fluid ">
        <div className="row about4">
          <div className="col-md-10 ">
            <div className="row  shadow-lg aboutsh">
              <div className="col about4row">
                <h1>NFT Minting</h1>
                <ul>
                  <li>-Select any area 4096 * 16px.</li>
                  <li>-Get a popup thats details of area in sq feet.</li>
                  <li>
                    -User click button of mine get 4096 Rimule are minted and
                    credit to his wallet.
                  </li>
                  <li>
                    -Same Amount of pixel in Georim in the Smart contract.
                  </li>
                </ul>
              </div>
              <div className="col about4row d-flex justify-content-center">
                <img src="../assets/about5.png" alt="nft" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about5">
        <div className="row about4 d-flex justify-content-end">
          <div className="col-md-10">
            <div className="row  shadow-lg aboutsh">
              <div className="col about4row">
                <img src="../assets/about6.png" alt="auction" />
              </div>
              <div className="col about4row">
                <h1>Auction</h1>
                <ul>
                  <li>
                    -Putout the Auction of Bidof 1024 Rimul cost of 0.25 rimule
                    at 16 px.
                  </li>
                  <li>-Get 7 Days access automatically. </li>
                  <li>
                    -People who bid at the last min get 60 sec time extended.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
