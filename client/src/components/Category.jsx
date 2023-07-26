import React from 'react'
import '../Styles/category.css'
import diamondRing from '../assets/closeup-diamond-ring.jpg'
import platinumRing from '../assets/platinum-ring.jpg'

const Category = () => {


  	return (
    	<div>

			<h1 className='categoryTitle'>Rings</h1>

			{/* Sub-Category Carousel */}

			<div id='subCategoryCarousel' className='carousel slide'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='row'>
							<div className='col-sm-3'>
								<div className='subCategory'>
									<img className='subCategoryImg' src={diamondRing} alt='diamond-ring'/>
									<h5 className='subCategoryTitle'>Diamond</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='subCategory'>
									<img className='subCategoryImg' src={platinumRing} alt='diamond-ring'/>
									<h5 className='subCategoryTitle'>Platinum</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='subCategory'>
									<img className='subCategoryImg' src={platinumRing} alt='diamond-ring'/>
									<h5 className='subCategoryTitle'>Gold</h5>
								</div>
							</div>
							<div className='col-sm-3'>
								<div className='subCategory'>
									<img className='subCategoryImg' src={platinumRing} alt='diamond-ring'/>
									<h5 className='subCategoryTitle'>Silver</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
					<div className='row'>
							<div className='col-sm-6'>
								<h2>bye</h2>
							</div>
							<div className='col-sm-6'>
								<h2>bye</h2>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#subCategoryCarousel" data-bs-slide="prev">
					<i class="fa-solid fa-angle-left"></i>
					<span class="carousel-control-prev-icon"></span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#subCategoryCarousel" data-bs-slide="next">
					<span class="carousel-control-next-icon"></span>
				</button>
			</div>

		</div>
  	)
}

export default Category