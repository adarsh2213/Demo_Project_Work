import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navcolor">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <h1> INNO LOFT</h1>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-auto" role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Enter interest,company name,ect......."
                aria-label="Search"
              />
              <div>
                <i className="fa-solid fa-magnifying-glass icon"></i>
              </div>
            </form>
          </div>
          <div className="drop">
            <div className="dropdown ">
              <a
                className="nav-link active ms-3 dropdown-toggle"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-current="page"
                href="#"
              >
                <i className="fa-sharp fa-solid fa-circle-user drop "></i>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/registration">
                  New Registration
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item" href="login">
                   Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  </>
  )
}
