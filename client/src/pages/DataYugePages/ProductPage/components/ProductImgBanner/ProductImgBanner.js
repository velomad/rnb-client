import React from 'react';
import { Slider } from '../../../../../components';

const ProductImgBanner = () => {
    const [productImages, setProductImages] = React.useState([
        '/static/images/design.jpg',
        '/static/images/dark-pattern.png',
        '/static/images/ajioicon.png',
        '/static/images/square.jpg',
    ])
    return ( 
        <React.Fragment>
            <Slider
                spaceBetween={20}
                slidesPerView={3}
                pagination={true}
                loop={true}
                autoplay={{
					delay: 2500,
					disableOnInteraction:false
                }}
                slidesPerViewMobile={1}
                spaceBetweenMobile={10}
                cardHeight={'25rem'}
                productImages={productImages}
            />
        </React.Fragment>
     );
}
 
export default ProductImgBanner;