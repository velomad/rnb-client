import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
const ProductSpecs = (props) => {
	console.log('specs', props.specs.sub_specs);
	let ratingToReturn = [];
	const Rating = () => {
		for (let i = 0; i < props.productDetails[0].product.productRating; i++) {
		  ratingToReturn.push(<span> {<StarIcon style={{color:'orange'}} />}</span>);
		}
		return ratingToReturn;
	  };
	return (
		<React.Fragment>
			{
				props.productDetails.map((el, index) => {
					return (
						<div key={index} className='m-4'>
							<h4 className='font-bold text-gray-700'>{el.product.productTitle}</h4>
							<h4 className='font-bold text-black'>&#x20B9; {el.product.productLowestPrice}</h4>
							<h4 className='font-bold text-gray-700'>Rating: {Rating()}</h4>
							
							{/* <h4 className='text-bold text-black'>{el.product.productLink}</h4> */}
						</div>
					)
				})
			}
			<h4 className='font-black text-gray-700 m-4'>Main Specifications</h4>
			<ul>
				{
					props.specs && props.specs.main_specs && props.specs.main_specs.length > 0 ? props.specs.main_specs.map((el, index) => {
						return (
							<li className='font-bold text-gray-700 ml-6' key={index}><ArrowRightIcon /> {el}</li>
						)
					})
						:
						<li className='font-bold text-gray-700 ml-4'>Not Available</li>
				}
			</ul>
			<h4 className='font-black text-gray-700 m-4'>Specifications</h4>
			{
				props.specs && props.specs.sub_specs ?
					Object.keys(props.specs.sub_specs).map((el, index) => {
						return (
							<React.Fragment>
								<h5 key={index} className='font-bold text-black m-4'>{el}</h5>
								<Grid container spacing={0}>
									{
										props.specs.sub_specs[el].map((item, itemindex) => {
											return (
												<Grid item xs={6}>
													<p key={itemindex} className='font-medium text-gray-600 ml-4 mr-4 mt-2 mb-2'>{item.spec_key}</p>
												</Grid>
											)
										})
									}
									{
										props.specs.sub_specs[el].map((item, itemindex) => {
											return (
												<Grid item xs={6}>
													<p key={itemindex} className='font-medium text-gray-600 ml-4 mr-4 mt-2 mb-2'>{item.spec_value}</p>
												</Grid>
											)
										})
									}
								</Grid>
							</React.Fragment>
						)
					})
					:
					<h4>No data</h4>
			}

		</React.Fragment>
	);
};

export default ProductSpecs;
