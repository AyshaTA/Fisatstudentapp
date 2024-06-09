import React from 'react'
import NavBar from './NavBar'

const Search = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="from-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary">SEARCH</button>
            </div>
        </div>
    </div></div>
  )
}

export default Search