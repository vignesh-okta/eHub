import "./SidebarMenu.scss";
import "bootstrap/dist/css/bootstrap-grid.css";

import "bootstrap/js/dist/dropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import AppList from "../AppList/AppList";

function SidebarMenu({ name }) {
  return (
    <section>
      <div className="wrap">
        <div className="d-flex justify-content-between flex-column sidebar">
          <div>
            <a className=" d-non d-sm-block text-decoration-none  sidebar__text d-flex align-itemcenter">
              <span className="ms-1 fs-5">EHub User Dashboard</span>
            </a>
            <ul className="nav nav-pills flex-column sidebar__ul">
              <li className="nav-item text-white fs-4 sidebar--active">
                <Link
                  to="/dashboard"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-window-stack  sidebar__icon"></i>
                  <span className="ms-2 d-non d-sm-inline sidebar__text ">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 ">
                <Link
                  to="#"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-person-heart  sidebar__icon"></i>
                  <span className="ms-2  d-non d-sm-inline sidebar__text">
                    Edit
                  </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4">
                <Link
                  to="#"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-gear sidebar__icon "></i>
                  <span className="ms-2  d-non d-sm-inline sidebar__text">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown open">
            <a
              className="text-decoration-none text-white p-3 dropdown-toggle"
              type="button"
              id="triggerID"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 sidebar__text">{name}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarMenu;
