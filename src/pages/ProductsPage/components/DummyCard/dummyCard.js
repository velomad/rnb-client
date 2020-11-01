import React from 'react';
import './dummycard.css';
const DummyCard = () => {
    return (
        <React.Fragment>
            <div class="container">
                <div class="card">
                    <div class="card-head">
                        <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" class="card-logo" />
                            <div class="product-detail">
                                <h2>Hartbeespoort</h2> Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness
      </div>
                            <span class="back-text">
                                FAS
            </span>
    </div>
                        <div class="card-body">
                            <div class="product-desc">
                                <span class="product-title">
                                    Hartbee<b>spoort</b>
                                    <span class="badge">
                                        New
                </span>
                                </span>
                                <span class="product-caption">
                                    Basket Ball Collection
              </span>
                                <span class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star grey"></i>
                                </span>
                            </div>
                            <div class="product-properties">
                                <span class="product-color">
                                    <h4>Colour</h4>
                                    <ul class="ul-color">
                                        <li><a href="#" class="orange active"></a></li>
                                        <li><a href="#" class="green"></a></li>
                                        <li><a href="#" class="yellow"></a></li>
                                    </ul>
                                </span>
                                <span class="product-price">
                                    USD<b>23,453</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="yt">
                    <a href="https://www.youtube.com/watch?v=jYAmKNOJ4Ck" target="_blank">
                        <img width="151" src="https://s5.postimg.cc/vzwuxmw87/template.png" alt="" />
                    </a>
                </div>
        </React.Fragment>
    );
}

export default DummyCard;