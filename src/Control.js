import React from "react";
import "./Control.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Control() {
  return (
    <div className="control">
      <hr className="hr" />

      <nav className="nav nav-pills nav-justified">
        <a className="nav-link disable" aria-current="page" href="#">
          <FontAwesomeIcon icon={faBackwardStep} className="font px-4 mb-1" />
          <FontAwesomeIcon icon={faPause} className="fonte px-4 " />
          <FontAwesomeIcon icon={faForwardStep} className="font px-4 mb-1" />
        </a>
        <a className="nav-link disabled" aria-disabled="true">
          <ul className="d-flex">
            <li>
              <img
                src={require("./image/ciara.jpeg")}
                className="ciara "
                alt="ciara cover"
              />
            </li>
            <li className="pb-0">
              Da Girls (Girls Mix) (feat. Lady London & Lola Brooke)
            </li>
          </ul>
        </a>
        <a className="nav-link disabled pt-3" aria-disabled="true">
          <FontAwesomeIcon icon={faThumbsUp} className="px-3" />
          <FontAwesomeIcon icon={faThumbsDown} className="px-3" />
          <FontAwesomeIcon icon={faEllipsisVertical} className="px-3" />
        </a>
        <a className="nav-link disabled" aria-disabled="true">
          <FontAwesomeIcon icon={faVolumeHigh} className="px-3" />
          <FontAwesomeIcon icon={faRepeat} className="px-3" />
          <FontAwesomeIcon icon={faShuffle} className="px-3" />
          <FontAwesomeIcon icon={faCaretDown} className="px-3" />
        </a>
      </nav>
    </div>
  );
}
