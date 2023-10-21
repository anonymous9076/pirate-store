import React from 'react'
import './SpecificItem'
function SpecificItem() {
    return (
        <>
            <div className="home-section">

                <section className="padding-y">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-6">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap img-thumbnail">
                                        <img height="560" alt='...' src="assets/images/items/10.webp" />
                                    </div>
                                    <div className="thumbs-wrap">
                                        {/*sari img nu ik link dena hai isi image da*/}
                                        <img width="60" height="60" alt='...' src="assets/images/items/10.webp" />
                                        <img width="60" height="60" alt='...' src="assets/images/items/10.webp" />
                                        <img width="60" height="60" alt='...' src="assets/images/items/10.webp" />
                                        <img width="60" height="60" alt='...' src="assets/images/items/10.webp" />
                                        <img width="60" height="60" alt='...' src="assets/images/items/10.webp" />
                                    </div>
                                </article>
                            </aside>
                            <main className="col-lg-6">
                                <article className="ps-lg-3">
                                    <h4 className="title text-dark">Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual Hoodie </h4>
                                    <div className="rating-wrap my-3">
                                        <ul className="rating-stars">
                                            <li style={{ width: "80%" }} className="stars-active"> <img alt='...' src="assets/images/misc/stars-active.svg"  /> </li>
                                            <li> <img alt='...' src="assets/images/misc/starts-disable.svg"  /> </li>
                                        </ul>
                                        <b className="label-rating text-warning"> 4.5</b>
                                        <i className="dot"></i>
                                        <span className="label-rating text-muted"> <i className="fa fa-shopping-basket"></i> 154 orders </span>
                                        <i className="dot"></i>
                                        <span className="label-rating text-success">In stock</span>
                                    </div>

                                    <div className="mb-3">
                                        <var className="price h5">$75.00</var>
                                        <span className="text-muted">/per box</span>
                                    </div>

                                    <p>Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.</p>

                                    <dl className="row">
                                        <dt className="col-3">Type:</dt>
                                        <dd className="col-9">Regular</dd>

                                        <dt className="col-3">Color</dt>
                                        <dd className="col-9">Brown</dd>

                                        <dt className="col-3">Material</dt>
                                        <dd className="col-9">Cotton, Jeans </dd>

                                        <dt className="col-3">Brand</dt>
                                        <dd className="col-9">Reebook </dd>
                                    </dl>

                                    <hr />

                                    <div className="row mb-4">
                                        <div className="col-md-4 col-6 mb-2">
                                            <label className="form-label">Size</label>
                                            <select className="form-select">
                                                <option>XS</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                <option>XL</option>
                                                <option>XXL</option>

                                            </select>
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <label className="form-label d-block">Quantity</label>
                                            <div className="input-group input-spinner">
                                                <button className="btn btn-icon btn-light" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                        <path d="M19 13H5v-2h14v2z"></path>
                                                    </svg>
                                                </button>
                                                <input className="form-control text-center" placeholder="" value="14" />
                                                <button className="btn btn-icon btn-light" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#999" viewBox="0 0 24 24">
                                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <button>Buy Now</button>
                                    <button>Add to Cart</button>
                                    <button>Save to wishlist</button>

                                </article>
                            </main>
                        </div>

                    </div>
                </section>

                <section className="padding-y bg-light border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="card">
                                    <header className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <p  data-bs-target="#tab_specs" data-bs-toggle="tab" className="nav-link active">Specification</p>
                                            </li>
                                            <li className="nav-item">
                                                <p data-bs-target="#tab_warranty" data-bs-toggle="tab" className="nav-link active" >Warranty info</p>
                                            </li>
                                            <li className="nav-item">
                                                <p data-bs-target="#tab_shipping" data-bs-toggle="tab" className="nav-link active">Shipping info</p>
                                            </li>
                                            <li className="nav-item">
                                                <p data-bs-target="#tab_seller" data-bs-toggle="tab" className="nav-link active">Seller profile</p>
                                            </li>
                                        </ul>
                                    </header>
                                    <div className="tab-content">
                                        <article id="tab_specs" className="tab-pane show active card-body">
                                            <p>With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                            <ul className="list-check cols-two">
                                                <li>Some great feature name here </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur </li>
                                                <li>Duis aute irure dolor in reprehenderit </li>
                                                <li>Optical heart sensor </li>
                                                <li>Easy fast and ver good </li>
                                                <li>Some great feature name here </li>
                                                <li>Modern style and design</li>
                                            </ul>
                                            <table className="table border table-hover">
                                                <tr>
                                                    <th>  Display: </th> <td> 13.3-inch LED-backlit display with IPS </td>
                                                </tr>
                                                <tr>
                                                    <th>  Processor capacity: </th> <td> 2.3GHz dual-core Intel Core i5 </td>
                                                </tr>
                                                <tr>
                                                    <th>  Camera quality: </th> <td>720p FaceTime HD camera  </td>
                                                </tr>
                                                <tr>
                                                    <th>  Memory </th> <td> 8 GB RAM or 16 GB RAM </td>
                                                </tr>
                                                <tr>
                                                    <th>  Graphics </th> <td> Intel Iris Plus Graphics 640 </td>
                                                </tr>
                                            </table>
                                        </article>
                                        <article id="tab_warranty" className="tab-pane card-body">
                                            Tab content or sample information now <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        </article>
                                        <article id="tab_shipping" className="tab-pane card-body">
                                            Another tab content  or sample information now <br />
                                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </article>
                                        <article id="tab_seller" className="tab-pane card-body">
                                            Some other tab content  or sample information now <br />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </article>
                                    </div>
                                </div>

                            </div>
                            <aside className="lg-4">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Similar items</h5>

                                        <article className="itemside mb-3">
                                                <img alt='...' src="assets/images/items/8.webp" width="96" height="96" className="img-md img-thumbnail" />
                                            <div className="info">
                                                <strong className="price"> $38.90</strong>
                                            </div>
                                        </article>

                                        <article className="itemside mb-3">
                                                <img alt='...' src="assets/images/items/9.webp" width="96" height="96" className="img-md img-thumbnail" />
                                            <div className="info">
                                                <strong className="price"> $29.50</strong>
                                            </div>
                                        </article>

                                        <article className="itemside mb-3">
                                                <img alt='...' src="assets/images/items/10.webp" width="96" height="96" className="img-md img-thumbnail" />
                                            <div className="info">
                                                <strong className="price"> $120.00</strong>
                                            </div>
                                        </article>

                                        <article className="itemside mb-3">
                                                <img alt='...' src="assets/images/items/11.webp" width="96" height="96" className="img-md img-thumbnail" />
                                            <div className="info">
                                                <strong className="price"> $339.90</strong>
                                            </div>
                                        </article>

                                    </div>
                                </div>

                            </aside>
                        </div>
                       

                    </div>
                </section>
            </div>
        </>
    )
}

export default SpecificItem