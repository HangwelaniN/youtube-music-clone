import React from "react";
import ReactPlayer from "react-player";
import "./Playlist.css";
import Control from "./Control";

export default function Playlist() {
  return (
    <div className="playlist">
      <div className="row position-absolute top-50 start-0 translate-middle-y">
        <div className=" picture col-md-8">
          <img
            src={require("./image/cici.jpg")}
            className="cici "
            alt="ciara cover"
          />
        </div>
        <div className="content col-md-4">
          <ul className="d-flex justify-content-between">
            <li className="p-2">UP NEXT</li>
            <li>LYRICS</li>
            <li>RELATED</li>
          </ul>
          <hr className="m-0" />
          <div className="small p-0">
            <ul>
              <li className="color">Playing from</li>

              <li className="hov fs-6">
                Da Girls (Girls Mix) [Official Video] Radio
              </li>
              <li className="smallers fs-6">Auto-play</li>
              <li className="color">
                Add similar content to the end of the queue
              </li>
              <div className="d-flex">
                <li>
                  <img
                    src={require("./image/ciara.jpeg")}
                    className="ciara "
                    alt="ciara cover"
                  />
                </li>
                <li className="hover fs-6 pt-2">
                  Da Girls (Girls Mix) [Official Video] Radio
                </li>
              </div>

              <li className="smallers fs-6">Ciara</li>
              <li className="smallers fs-6">Auto-play is off</li>
            </ul>
          </div>
        </div>
      </div>

      <Control />
    </div>
  );
}
