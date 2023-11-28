import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg-black text-white ">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-contant-left">
          <FontAwesomeIcon icon={faBars} className="bars" />
          <li className=" logo fs-2 fw-bolder ">HN</li>
          <p className="logos fs-5 ">HangwN</p>
        </div>
        <form>
          <input
            type="text"
            placeholder="  search songs, album, artists, podcasts   x"
            className="input mt-2 "
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg "
            className="none px-2"
          />
        </form>
        <div className="mt-2">
          <FontAwesomeIcon icon={faTv} />
          <span className="text-bg-secondary p-1 px-2 m-1 me-5 text-bolder rounded-5 ">
            E
          </span>
        </div>
      </div>
      <hr className="mt-0 mb-0 " />
      <div className="vl"></div>

      <div className="row row-cols-auto">
        <div className="col">
          <FontAwesomeIcon icon={faHouse} />
          <p className="only">Home</p>
        </div>
        <div className="none col">Home</div>
      </div>
      <div className="row row-cols-auto">
        <div className="col">
          <FontAwesomeIcon icon={faCompass} />
          <p className="only">Explore</p>
        </div>
        <div className="none col">Explore</div>
      </div>
      <div className="row row-cols-auto">
        <div className="col">
          <FontAwesomeIcon icon={faCirclePlay} />
          <p className="only">Library</p>
        </div>
        <div className="none col">Library</div>
      </div>
      <div className="row row-cols-auto">
        <div className="col">
          <FontAwesomeIcon icon={faPodcast} />
          <p className="only">Upgrade</p>
        </div>
        <div className="none col">Upgrade</div>
      </div>
      <hr className="hor" />
      <div className="d-flex align-items-start flex-column">
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
          <li className="size ">Fav</li>
          <p className="sizes">Evelyn Ngwekhulu</p>
          <li className="size ">Episode for later</li>
          <p className="sizes">Auto playlist</p>
        </ul>
      </div>
    </div>
  );
}

export default App;
