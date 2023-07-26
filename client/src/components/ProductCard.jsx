import React from 'react'

import '../Styles/category.css'
import diamondRing from '../assets/closeup-diamond-ring.jpg'

const productCard = () => {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-6 mb-4'>
		<div className="productCard card" >
			<img src={diamondRing} className="card-img-top productCardImg" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Product title</h5>
                <h5 style={{float: "left"}}>price</h5>
                <button className='addToCartBtn'><span className="material-symbols-outlined">add_shopping_cart</span></button>
			</div>
		</div>
	</div>
  )
}

export default productCard