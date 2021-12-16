import React from 'react'
import banner from '../../assets/images/poke.jpg'
import './banner.css';

export const Banner = () => {
	return (
		<>
		<div className="col-md-12 banner-container">
				<img src={banner}/>
			</div>			
		</>
	)
}
