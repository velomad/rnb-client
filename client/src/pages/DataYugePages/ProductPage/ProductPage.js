import React from "react";
import { ProductSpecs, ProductImgBanner } from "./components";
import axios from 'axios';
import qs from 'query-string';


const ProductPage = (props) => {
    const [productSpecs,setProductSpecs] = React.useState([]);
    const [productImages,setproductImages] = React.useState([]);
	const [product,setProduct] = React.useState([]); 

    React.useEffect(() => {
        console.log(props);
        console.log('sessionid',JSON.parse(sessionStorage.getItem('productDetails')));
		setProduct(JSON.parse(sessionStorage.getItem('productDetails')));
        fetchData();
    }, [props]);

    const fetchData = () => {
        let URL1 = `https://price-api.datayuge.com/api/v1/compare/specs?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&id=${props.match.params.productId}`
        let URL2 = `https://price-api.datayuge.com/api/v1/compare/images?api_key=nt5N7VXa0hYPHiIwRTJKZpwFiMjzvcicnoS&id=${props.match.params.productId}`

        const promise1 = axios.get(URL1);
        const promise2 = axios.get(URL2);

        Promise.all([promise1, promise2]).then(function (values) {
            console.log('Promise one',values[0].data.data);
            console.log('Promise two',values[1].data.images.large);
            setProductSpecs(values[0].data.data);
            setproductImages(values[1].data.images.large);
        });
    }

    return (
        <div>
            <div className='mb-8'>
                <ProductImgBanner images={productImages} tempImg={product} />
            </div>
            <ProductSpecs specs={productSpecs} productDetails={product}  />
        </div>
    );
};

export default ProductPage;
