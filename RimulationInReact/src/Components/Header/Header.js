import React, { useRef, useEffect } from "react";
import "./header.css";
import Team from "../Pages/Team";
import Roadmap from "../RoadMap/Roadmap";
export default function Header() {
  const vid = useRef();
  useEffect(() => {
    console.log("vid", vid.current.play());

    return () => {};
  }, []);

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <video id="background-video" ref={vid} autoplay loop muted>
          <source src="../assets/rimvideo.mp4" type="video/mp4" />
        </video>
        <div className="row rimHome1 m-0">
          {/* <div className="col-md-5   rimHome1col ">
            <img
              src="../assets/home2.png"
              className="img-fluid animate__animated animate__backInLeft 	  "
              alt="advt"
            />
          </div> */}
          <div className="col-md-12 rimHome1col2">
            <h1 className="animate__animated animate__backInRight text-white">
              Rimulation  Into Future
            </h1>
          </div>
        </div>
      </div>
      {/* 2nd content */}
      <div className="container-fluid my-5">
        <div className="row container2">
          <div className="col-md-5">
            <h1 className=" animate__animated animate__delay-1s animate__bounce animate__infinite	  animate__slow">
              ENTER TO <br /> THE DIGITAL <br /> WORLD
            </h1>
            <br />
            <p>
              Drop the pin on the map,and purchase the land in Rimulationas nft
              on the X-axis and Y-axis, and be a part of our digital world
            </p>
            <button className="learnMore">Learn more</button>
          </div>
          <div className="col-md-7 container2Col2">
            <img
              src="../assets/home3.png"
              className="img-fluid animate__animated animate__pulse  animate__slow animate__delay-1s animate__infinite"
              alt="land"
            />
            <div className="ctr2Col2rel ">
              <img
                src="../assets/home4.png"
                className="img-fluid animate__animated animate__fadeIn  animate__slower animate__infinite"
                alt="mark"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd content  */}
      <div className="container-fluid my-5">
        <div className="row cont3">
          <div className="col ">
            <h1 className="text-center animate__animated    animate__fadeInDown animate__infinite 	animate__slower">
              Rimulation
            </h1>
            <h1 className="text-start animate__animated    animate__fadeIn animate__infinite animate__slower">
              MAKE THE
            </h1>
            <h1 className="text-end animate__animated    animate__fadeInUp animate__infinite animate__slower">
              WORLD YOURS
            </h1>
          </div>
        </div>
        <div className="row cont3row2">
          <div className="col">
            <p>
              Rimulation is a virtual world where users can buy, sell, collect,
              and curate over 64 billion unique plots of virtual land. The
              Rimulation virtual real estate platform is mapped over the entire
              surface of the globe, allowing users to purchase —literally—any
              place on Earth. From skyscrapers and stadiums to historical
              monuments and iconic structures including wonders of the natural
              world, when you step into RImulation, you’ll truly make a world of
              your own.
            </p>
          </div>
        </div>
      </div>
      {/* 4th content  */}
      <div className="container-fluid">
        <div className="row cont4row">
          <div className="col animate__animated animate__pulse animate__infinite animate__slower">
            <h1>
              Create your Real <br />
              Estate Wiki Profile{" "}
            </h1>
          </div>
        </div>
        <div className="row cont4row2">
          <div className="col-md-6">
            <img
              src="../assets/home5.png"
              alt="land3"
              className="img-fluid animate__animated animate__swing animate__infinite animate__slower"
            />
          </div>
          <div className="col">
            <p>
              The Rimulation displays social media, wiki website content, real
              estate data, visuals, videos, map localisation and blockchain
              identification internet solutions for real estates and specific
              places in the World. On the unique and newly created real estate
              profile page, users owning the underlying LAND on the bases on the
              basis of x axis y axis and z axis for zoom, can create, upload
              share and store real estate data{" "}
            </p>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <button className="">Map</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5th content  */}

      <Roadmap />

      {/* 6th content  */}
      <Team />

      {/* 7th content  */}
      {/* <div className="container-fluid   secCOntainer">
        <div className="row g-5 d-flex justify-content-around">
          <div className="col-md-5  detailsCard">
            <div className="row">
              <div className="col-md-12  d-flex justify-content-around">
                <div className="col-md-3">
                  <span className="contentimgseven">
                    <img
                      src="../assets/wallet.png"
                      className="img-fluid"
                      alt="wallet"
                    />
                  </span>
                </div>
                <div className="col-md-5  sevencontent">
                  <p>Step 01</p>
                  <p>Connect your Wallet</p>
                </div>
              </div>
            </div>
            <p className="pt-5 px-4 fw-bold">
              connect your wallet Rimulation marketplace and drop a pin on your
              favorite location and mint it.
            </p>
          </div>
          <div className="col-md-5  detailsCard">
            <div className="row">
              <div className="col-md-12  d-flex justify-content-between">
                <div className="col-md-3">
                  <span className="contentimgseven">
                    <img
                      src="../assets/cart.png"
                      className="img-fluid"
                      alt="wallet"
                    />
                  </span>
                </div>
                <div className="col-md-5  sevencontent">
                  <p>Step 02</p>
                  <p>Mint Your NFT</p>
                </div>
              </div>
            </div>
            <p className="pt-5 px-4 fw-bold">
              Buy your NFT here and be a part of digital world in Rimulation
            </p>
          </div>
          <div className="col-md-5  detailsCard">
            <div className="row">
              <div className="col-md-12  d-flex justify-content-between">
                <div className="col-md-3">
                  <span className="contentimgseven">
                    <img
                      src="../assets/file_collection.png"
                      className="img-fluid"
                      alt="wallet"
                    />
                  </span>
                </div>
                <div className="col-md-5  sevencontent">
                  <p>Step 03</p>
                  <p>Create Collection</p>
                </div>
              </div>
            </div>
            <p className="pt-5 px-4 fw-bold">
              create a collection in Rimulation marketplace and enjoy the
              benefits in the virtual world.{" "}
            </p>
          </div>
          <div className="col-md-5  detailsCard">
            <div className="row">
              <div className="col-md-12  d-flex justify-content-between">
                <div className="col-md-3">
                  <span className="contentimgseven">
                    <img
                      src="../assets/amount.png"
                      className="img-fluid"
                      alt="wallet"
                    />
                  </span>
                </div>
                <div className="col-md-5  sevencontent">
                  <p>Step 04</p>
                  <p>Sell your NFT</p>
                </div>
              </div>
            </div>
            <p className="pt-5 px-4 fw-bold">
              Sell your digital land and earn profit in the cryptocurrency and
              be a part of Rimulation digital world.{" "}
            </p>
          </div>
        </div>
      </div> */}
      {/* <AbsoluteRelative
        text1="ROAD"
        text="Road Map"
        text2="The Journey of"
        text3="Rimulation"
      /> */}
      {/* <Team /> */}
    </>
  );
}
