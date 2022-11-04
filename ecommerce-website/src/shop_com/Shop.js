import React from 'react'
import './Shop.css'
// import { product } from '../ProductData'
import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router'
export default function Shop() {
  const [alldata, updatadata] = useState([])
  const [info, setinfo] = useState([])
  const navigate=useNavigate()



  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((data) => {
      console.log("axios", data);
      updatadata(data.data)
    })
  }, [])


  useEffect(()=>{
    setinfo(alldata)
  },[alldata])

  console.log("assdasd", info);




  const filterdata = (details) => {

    const filterdetails = alldata.filter((products) => {
      return products.category == details

    })
    setinfo(filterdetails)

    
    console.log("Mens Clothing", filterdetails)
  }

const filterdata2 =()=>{
   setinfo(...filterdata,filterdata2)

}


const descript = (id)=>{
      navigate(`/details/${id}`)
}
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by price</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="price-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label className="custom-control-label" htmlFor="price-1">
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-2">
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label className="custom-control-label" htmlFor="price-3">
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label className="custom-control-label" htmlFor="price-4">
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label className="custom-control-label" htmlFor="price-5">
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by color</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="color-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Color
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-1"
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-2"
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-3"
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-4"
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by size</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="size-all"
                  />
                  <label className="custom-control-label" htmlFor="size-all">
                    All Size
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-2"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-3"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-4"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-5"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* category Start */}

            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by Categories</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input onClick={() => { filterdata2() }}
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="category-all"
                  />
                  <label className="custom-control-label" htmlFor="category-all">
                    All Categories
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    onClick={() => { filterdata("men's clothing") }}

                    className="custom-control-input"
                    id="category-1"
                  />
                  <label className="custom-control-label" htmlFor="category-1">
                    Men's clothing
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    onClick={() => { filterdata("jewelery") }}
                    className="custom-control-input"
                    id="category-2"
                  />
                  <label className="custom-control-label" htmlFor="category-2">
                    Jewelery
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    onClick={() => { filterdata("electronics") }}
                    className="custom-control-input"
                    id="category-3"
                  />
                  <label className="custom-control-label" htmlFor="category-3">
                    Electronics
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    onClick={() => { filterdata("women's clothing") }}
                    className="custom-control-input"
                    id="category-4"
                  />
                  <label className="custom-control-label" htmlFor="category-4">
                    Women's clothing
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>

              </form>
            </div>



            {/* category end */}
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large" />
                    </button>
                    <button className="btn btn-sm btn-light ml-2">
                      <i className="fa fa-bars" />
                    </button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Latest
                        </a>
                        <a className="dropdown-item" href="#">
                          Popularity
                        </a>
                        <a className="dropdown-item" href="#">
                          Best Rating
                        </a>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          10
                        </a>
                        <a className="dropdown-item" href="#">
                          20
                        </a>
                        <a className="dropdown-item" href="#">
                          30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* {product.map((data) =>
                <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src={data.product_image} alt />
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-shopping-cart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="far fa-heart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-sync-alt" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-search" />
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href>
                        {data.product_name}
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{data.dis_price}</h5>
                        <h6 className="text-muted ml-2">
                          <del>{data.price}</del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </div>


              )} */}
<div className='row'>
              {info.map((data1) =>
                <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src={data1.image} alt style={{ height: "500px", width: "500px" }} />
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-shopping-cart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="far fa-heart" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-sync-alt" />
                        </a>
                        <a className="btn btn-outline-dark btn-square" href>
                          <i className="fa fa-search" onClick={() => {descript(data1.id)}}/>
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                    <a className="h6 text-decoration-none" href>  {data1.title} </a>
                     
                   
                      
                     
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{data1.price}</h5>

                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>

              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>













    </>
  )
}
