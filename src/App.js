import "./App.css";
import Main from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg-black text-white">
      <div className="row">
        <div className="col-sm-3 d-flex justify-contant-left px-0 ">
          <FontAwesomeIcon icon={faBars} className="bars mt-1 " />
          <li className=" logo fs-2 fw-bolder ">HN</li>
          <p className="logos fs-5 ">HangwN</p>
        </div>
        <div className="col-sm-6 search">
          <form>
            <input
              type="text"
              placeholder="  search songs, album, artists, podcasts   x"
              className="input mt-2"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg "
              className=" px-2"
            />
          </form>
        </div>
        <div className="col-sm-3 search mt-2">
          <FontAwesomeIcon icon={faTv} className="px-2" />
          <span className=" text-bg-secondary p-1 px-2 m-1 me-5 text-bolder rounded-5 ">
            E
          </span>
        </div>
        <div className="searched">
          <FontAwesomeIcon icon={faMagnifyingGlass} className=" px-2 pt-2" />
          <FontAwesomeIcon icon={faTv} className="px-3 pt-2 " />
          <span className="text-bg-secondary px-2 p-1  me-5 mb-2 rounded-5 ">
            E
          </span>
        </div>
        <hr className="mt-0 mb-0 " />
        <div className="vl"></div>
      </div>
      <Main />
    </div>
  );
}

export default App;
