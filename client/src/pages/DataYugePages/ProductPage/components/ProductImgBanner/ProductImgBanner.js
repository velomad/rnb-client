import React from 'react';
import { Slider } from '../../../../../components';

const ProductImgBanner = (props) => {

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
                productImages={props.images}
            />
        </React.Fragment>
     );
}
 
export default ProductImgBanner;