import React from "react";

export default function Create() {
  return (
    <>
      {" "}
      <div className=" d-flex main">
        <div className=" d-flex align-items-start flex-column  mb-3 side">
          <div className="p-2 users ">
            <div className="UserData mt-2">
              <i className="fa-sharp fa-solid fa-circle-user "></i>
              <p>Adarsh Maurya</p>
            </div>
          </div>

          <div className="p-2 sidebars ">
            <div className="Sidebardata d-flex  flex-column">
              <nav className="navbar  mb-2">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-solid fa-house iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Home</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-solid fa-users  iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Member</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-calendar-days iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Offer</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-calendar-days iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Request</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-calendar-days iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Company</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-sharp fa-regular fa-circle iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Ecosystem</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-calendar-days iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Event</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-calendar-days iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Project</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-regular fa-newspaper iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>News</span>
                    </a>
                  </div>
                </div>
              </nav>

              <nav className="navbar ">
                <div className="container-fluid d-flex  justify-content-start ">
                  <div className="col">
                    <i className="fa-solid fa-user-secret iconbar"></i>
                  </div>
                  <div className="col d-flex  justify-content-start ">
                    <a className="navbar-brand text-black">
                      <span>Admin</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-between  flex-column mb-3 center">
          <div className="p-2  justify-content-center">
            <h3 className="text-center">Welcome Add Title</h3>
            <div className="mb-3 mt-2 pt-2">
              <label for="formGroupExampleInput" className="form-label">
                Add your Event Title
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Title"
              />
            </div>
            <div className="mb-3  mt-2 pt-2">
              <label for="formGroupExampleInput2" className="form-label">
                Start
              </label>
              <input
                type="date"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />

              <label
                for="formGroupExampleInput2"
                className="form-label mt-2 pt-2"
              >
                End
              </label>
              <input
                type="date"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />

              <label
                for="formGroupExampleInput2"
                className="form-label mt-2 pt-2"
              >
                Time
              </label>
              <input
                type="time"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>

            <div className="mb-3 mt-2 pt-2">
              <label for="exampleFormControlTextarea1" className="form-label">
                Add main Discription
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <button type="button m-auto" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
          {/* <div className="p-2">Flex item</div> */}
        </div>
      </div>
    </>
  );
}
