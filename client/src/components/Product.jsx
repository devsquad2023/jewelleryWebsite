import React from 'react'

import '../Styles/product.css'
import diamondRing from '../assets/closeup-diamond-ring.jpg'

const Product = () => {


    return (
        <div>
            <div className='row product-page-head'>
                <div className='col-md-7 p-3 product-images'>

                    <div id="carouselExample" class="carousel slide" data-bs-interval="false" >

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={diamondRing} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={diamondRing} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={diamondRing} class="d-block w-100" alt="..." />
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>
                <div className='col-md-5 p-3 product-details'>

                    <div>
                        <h2>Lorem Ipsum dolor sit</h2>
                        <h6>Rings</h6>
                        <div>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star_half</span>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0' }}>star</span>
                        </div>

                        <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div>
                        <h2 className='product-price'>$199.99</h2>

                        <div className='product-buy-buttons'>
                            <button className='product-counter-btn'>
                                <span className="material-symbols-outlined">add</span>
                                <h4>1</h4>
                                <span className="material-symbols-outlined">remove</span>
                            </button>

                            <button className='product-add-to-cart-btn'>
                                <h5>ADD TO CART</h5>
                            </button>

                            <button className='product-buy-now-btn'>
                                <h4>BUY NOW</h4>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row product-page-reviews-and-specs'>
                <div className='col-md-9 col-md-push-9 p-3 order-md-first product-reviews'>

                    <h2 style={{fontWeight: "bold"}}>Reviews</h2>

                    <div className='review-box container-fluid h-100 p-0'>
                        <div className='row review-comment'>

                            <div className='col-md-1'>

                                <img className='profile-img' src={diamondRing} alt='profile-pic'/>

                            </div>

                            <div className='col-md-11'>

                                <h5>Name</h5>

                                <div>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1' }}>star_half</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0' }}>star</span>
                                </div>

                                <p style={{width: '90%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='col-md-3 col-md-pull-3 p-3 order-first mb-5'>

                    <div className='product-specs'>

                        <h2 className='product-specs-title'>Product Specifications</h2>

                        <h4 style={{fontWeight: 'bold'}}>Brand</h4>
                        <h6>Kalyan</h6>

                        <h4 style={{fontWeight: 'bold'}}>Karet</h4>
                        <h6>24</h6>

                        <h4 style={{fontWeight: 'bold'}}>Metal Type</h4>
                        <h6>Silver</h6>

                        <h4 style={{fontWeight: 'bold'}}>Dimension</h4>
                        <h6>5cm x 5cm</h6>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default Product