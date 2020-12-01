import StarIcon from '@material-ui/icons/Star';

const Rating = (stars) => {
    let ratingToReturn = []
	for (let i = 0; i < Number(stars); i++) {
		ratingToReturn.push(
			<span> {<StarIcon style={{ color: "orange", fontSize:"1rem"}} />}</span>,
		);
	}
	return ratingToReturn;
};

export default Rating;

// props.productDetails[0].product.productRating