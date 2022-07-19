import React from "react";
import "./roadmap.css";
export default function Roadmap() {
  return (
    <>
      <div
        className="container-fluid p-0 "
        style={{
          backgroundImage: `url(./assets/home6.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "auto",
          paddingTop: "0px",
        }}
      >
        <h1 className="text-center pt-3 fw-bold">ROADMAP</h1>
        <div className="row roadrow m-0 animate__animated animate__infinite animate__bounce animate__slower">
          <div className="col ">
            <div className="col  box sb9 sb1">
              <p>Idea Generation</p>
            </div>
            <div className="col box sb9 sb2">
              <p>Initial Release</p>
            </div>
            <div className="col box sb9 sb3">
              <p>Design & Development</p>
            </div>
            <div className="col box sb9 sb4">
              <p>Result & Final Report</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
