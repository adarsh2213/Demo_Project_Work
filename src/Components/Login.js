import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <>

            <style>{'body { background-color: #096d79; }'}</style>
            <div className='login'>
                <div className="container my-3  loginn" >
                    <form className=' shadow p-3 bg-body-tertiary rounded mt-5'>
                        <h3>  Login Here</h3>


                        <div className=" ms-5 mt-3 col-md-9  pt-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control imput" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className=" ms-5 mt-3 col-md-9  ">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control imput" id="exampleInputPassword1" required />
                        </div>
                        <Link to={"/Content"}>

                            <button type="submit" className="btn btn-primary mx-2  ms-5 mt-3">Login</button>
                        </Link>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login