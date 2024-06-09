import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
  const [data,addData]=useState(
    {
      "firstname":"",
      "lastname":"",
      "college":"",
      "dob":"",
      "course":"",
      "mobile":"",
      "email":"",
      "address":""
    }
  )
  const inputHandler=(event)=>{
    addData({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
  }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://fisat.ac.in/wp-content/uploads/2022/07/FISAT-full-e1657704756408.png" height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEWP1a7rBdrjUriVeBerwfCtqau4qS8y4_8_NvqfPntvJOyOgSFdtanF6PITklhLvyL4&usqp=CAU" height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://www.microtec.in/storage/1e0cefd2-b855-41c9-a0a9-a8487d17ba33/1e0cefd2-b855-41c9-a0a9-a8487d17ba33-1588164416.jpg" height="300px" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  
<div><br></br></div>

                </div>
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/></div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="from-label">DOB</label>
                        <input type="date" name="dob" id="" className="form-cotrol" value={data.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                            <option value="MCA">MCA</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input type="number" name="mobile" id="" className="form-control" value={data.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">E-mail</label>
                        <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent