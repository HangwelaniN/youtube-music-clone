import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";

function Main() {
  return (
    <div className="App  ">
      <div className=" row ">
        <div className=" col-sm-2">
          <div className="move">
            <FontAwesomeIcon icon={faHouse} />
            <p className="only">Home</p>

            <div className="none">Home</div>

            <div>
              <div>
                <FontAwesomeIcon icon={faCompass} />
                <p className="only">Explore</p>
              </div>
              <div className="none">Explore</div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faCirclePlay} />
                <p className="only">Library</p>
              </div>
              <div className="none">Library</div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faPodcast} />
                <p className="only">Upgrade</p>
              </div>
              <div className="none">Upgrade</div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-start flex-column">
          <hr className="hor" />
          <div className="last">
            <form>
              <input
                type="text"
                placeholder="  + New playlist"
                className="smaller "
              />
            </form>
            <ul className="px-4">
              <li className="size ">Liked music</li>
              <p className="sizes">📌Auto playlist</p>
              <li className="size "> Fav</li>
              <p className="sizes">
                Evelyn Ngwekhulu
                <FontAwesomeIcon icon={faVolumeHigh} className="loud" />
              </p>
              <li className="size ">Episode for later</li>
              <p className="sizes">Auto playlist</p>
            </ul>
          </div>
          <div className="row d-flex align-items-start flex-column ">
            <div className="col  ">
              <Playlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
