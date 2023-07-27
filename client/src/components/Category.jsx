import React from 'react'

import '../Styles/category.css'
import diamondRing from '../assets/closeup-diamond-ring.jpg'
import platinumRing from '../assets/platinum-ring.jpg'

import ProductCard from './ProductCard'

const Category = () => {


  	return (
    	<div>

			{/* Selected Category Title */}

			<h1 className='category-title'>Rings</h1>

			{/* Sub-Category Carousel */}

			<div id='sub-category-carousel' className='carousel slide ' data-bs-interval='false' >
				<div className='carousel-inner sub-category-carousel-inner'>
					<div className='carousel-item active'>
						<div className='row'>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={diamondRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Diamond</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={platinumRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Platinum</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={platinumRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Gold</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={platinumRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Silver</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
					<div className='row'>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={platinumRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Gold</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='sub-category'>
									<img className='sub-category-img' src={platinumRing} alt='diamond-ring'/>
									<h5 className='sub-category-title'>Silver</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev category-carousel-control-prev" type="button" data-bs-target="#sub-category-carousel" data-bs-slide="prev">
					<i className="fa-solid fa-angle-left"></i>
					<span className="carousel-control-prev-icon category-carousel-control-prev-icon"></span>
				</button>
				<button className="carousel-control-next category-carousel-control-next" type="button" data-bs-target="#sub-category-carousel" data-bs-slide="next">
					<span className="carousel-control-next-icon category-carousel-control-next-icon"></span>
				</button>
			</div>

			{/* Filter Sort */}

			<div style={{width: "100%", height: "80px"}}>
			<div className='filter-sort'>
				<div className="dropdown">
					<span className="material-symbols-outlined" style={{scale: "1.5", margin: "0 10px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">sort</span>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="/#">Action</a></li>
						<li><a className="dropdown-item" href="/#">Another action</a></li>
						<li><a className="dropdown-item" href="/#">Something else here</a></li>
					</ul>
				</div>
			</div>
			</div>

			{/* Listing Products */}

		 	<div className='row mx-5'>
				<ProductCard />

				<ProductCard />

				<ProductCard />

				<ProductCard />

				<ProductCard />

				<ProductCard />

				<ProductCard />
			</div>

		</div>
  	)
	
}

export default Category