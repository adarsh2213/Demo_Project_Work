import React from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <>
      <div className=" d-flex main">
        <div className=" d-flex align-items-start flex-column  mb-3 side">
          <div className="p-2 users ">
            <div className="UserData mt-2">
              <i className="fa-sharp fa-solid fa-circle-user "></i>
              <p>Adarsh Maurya</p>
            </div>
          </div>
          <div className="p-2 sidebars ">
            <div className="Sidebardata d-flex  flex-column ">
            <nav className="navbar ">
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
                  <a className="navbar-brand text-black" >
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
                  <a className="navbar-brand text-black"r >
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
                  <a className="navbar-brand text-black" >
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
                  <a className="navbar-brand text-black" >
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
                  <a className="navbar-brand text-black" >
                    <span>Admin</span>
                  </a>
                </div>
              </div>
              </nav>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-between  flex-column mb-3 center">
          <Link to="/create">
            <button type="button" className="btn  mt-3  addtitle ">
              Add Title
            </button>
          </Link>

          <div className="p-2 mt-3   rounded-end">
            <div className="container border border-secondary mt-4 rounded-end">
              <div className="row">
                <div className="col ">
                  <h5> Blog Categories</h5>
                </div>
                <div className="col d-flex justify-content-end">
                  <button className="iconss">
                    {/* <i className="fa-regular fa-trash"></i> */}
                    <DeleteOutlineIcon
                      style={{ fontSize: "35px", color: "red" }}
                    />
                  </button>
                </div>
              </div>
              <div className="row location">
                <div className="col location ">
                  <DateRangeIcon style={{ fontSize: "20px", color: "blue" }} />
                  <span> 29/06/2023- Noida secter 15</span>
                </div>
                <div className="col ">
                  <LocationOnIcon style={{ fontSize: "18px", color: "blue" }} />
                  <span>A beginner’s guide to writing</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  It’s true: title tags and meta descriptions won’t help your
                  website magically rise to the top of the search engine
                  results. Google confirmed it back in 2007 so let’s kill that
                  myth right at the outset. However, these two elements can
                  improve click through rates and entice people to click on your
                  link rather than the link of one of your competitors. So why
                  do site owners neglect title tags and meta descriptions,
                  pushing them to the back burner? Title tags and descriptions
                  tell search engines and users what your site is about. They
                  describe the content on each page of your website and explain
                  how it relates to a user’s search query. And, when used
                  properly, they can act as a “hook” of your advertising in the
                  search engine results.
                </div>
              </div>

              <div className="row">
                <div className="col mt-2">
                  <div className="edit mt-2">
                    <button className="zeo">
                      <span className="edit">Edit</span>

                      <ModeEditIcon
                        istyle={{
                          fontSize: "3px",
                          color: "blue",
                          outline: "border ",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end */}

          <div className="p-2 mt-3   rounded-end">
            <div className="container border border-secondary mt-4 rounded-end">
              <div className="row">
                <div className="col ">
                  <h5> Blog Categories</h5>
                </div>
                <div className="col d-flex justify-content-end">
                  <button className="iconss">
                    {/* <i className="fa-regular fa-trash"></i> */}
                    <DeleteOutlineIcon
                      style={{ fontSize: "30px", color: "red" }}
                    />
                  </button>
                </div>
              </div>
              <div className="row location">
                <div className="col location ">
                  <DateRangeIcon style={{ fontSize: "20px", color: "blue" }} />
                  <span> 29/06/2023- Noida secter 15</span>
                </div>
                <div className="col ">
                  <LocationOnIcon style={{ fontSize: "18px", color: "blue" }} />
                  <span>A beginner’s guide to writing</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  It’s true: title tags and meta descriptions won’t help your
                  website magically rise to the top of the search engine
                  results. Google confirmed it back in 2007 so let’s kill that
                  myth right at the outset. However, these two elements can
                  improve click through rates and entice people to click on your
                  link rather than the link of one of your competitors. So why
                  do site owners neglect title tags and meta descriptions,
                  pushing them to the back burner? Title tags and descriptions
                  tell search engines and users what your site is about. They
                  describe the content on each page of your website and explain
                  how it relates to a user’s search query. And, when used
                  properly, they can act as a “hook” of your advertising in the
                  search engine results.
                </div>
              </div>

              <div className="row">
                <div className="col mt-2">
                  <div className="edit mt-2">
                    <button className="zeo">
                      <span className="edit">Edit</span>
                      <ModeEditIcon
                        istyle={{
                          fontSize: "3px",
                          color: "blue",
                          outline: "border ",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end */}

          {/* <div className="p-2">Flex item</div> */}
          {/* <div className="p-2">Flex item</div> */}
        </div>
      </div>
    </>
  );
}
