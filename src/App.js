import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaHouseUser, FaUser, FaComment, FaRegSun } from "react-icons/fa";
export default function App() {
  function activeLink(puntero) {
    const list = document.querySelectorAll(".list");
    list.forEach((item) => {
      item.classList.remove("active");
    });
    list[puntero - 1].classList.add("active");
  }
  return (
    <div className="Navigator">
      <ul>
        <li
          onClick={() => {
            activeLink(1);
          }}
          className="list active"
        >
          <a href="#">
            <span className="icon">
              <FaHouseUser />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(2);
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaUser />
            </span>
            <span className="text">Perfile</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(3);
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaComment />
            </span>
            <span className="text">coments</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(4);
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaRegSun />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicador"></div>
      </ul>
    </div>
  );
}
