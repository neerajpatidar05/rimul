import React from "react";

export default function AbsoluteRelative(props) {
  console.log("props", props);
  return (
    <div className="container-fluid" style={{ backgroundColor: "#050a3a" }}>
      <div className="row">
        <div className="col">
          <div className="relative">
            <p>{props.text1}</p>
            <div className="absolute">
              <h1 className="joinport fw-bold">{props.text} </h1> <br />
              <h1 className="fw-bolder ps-4">
                {props.text2} <br /> {props.text3}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
