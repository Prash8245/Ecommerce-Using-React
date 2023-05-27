import React from 'react';
import {useLocation} from 'react-router-dom';
import './mainstyle.css';
import delivery from './Assets/delivey.png';
import replacement from './Assets/replacement.png';
import secure from './Assets/Secure-payment..png';
import warranty from './Assets/warranty.png';

export default function Products() {
    const location = useLocation();
    const propsData = location.state;

    const discount = (disc) => {
        var percent = disc / 100;
        return percent;
    }

    let imgs = propsData.images;

    return (
        <div id='product' className='container'>
            <div className='row p-4' id='productData'>
                <div className='col'></div>
                <div className='col-4 p-3'>
                    <img src={propsData.thumbnail} alt="product"/>
                </div>
                <div id='productData' className='col-7'>
                    <h2
                        className='display-2'
                        style={{
                        fontWeight: "bold"
                    }}>{propsData.title[0].toUpperCase()+propsData.title.substring(1)}</h2>
                    <h5>{propsData.description}</h5>
                    <div>
                        <span
                            style={{
                            fontSize: "34px",
                            color: "rgb(182, 12, 12)"
                        }}>{"-" + propsData.discountPercentage + "%"}</span>
                        <span
                            style={{
                            fontSize: "44px",
                            fontWeight: "bold",
                            marginLeft: "20px"
                        }}>
                            &#8377; {(Math.floor(propsData.price * 81.9)).toLocaleString('en-IN')}
                        </span>
                    </div>
                    <div>
                        <span
                            style={{
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>
                            <b>M.R.P</b>
                            &nbsp;
                            <del> &#8377; { (Math.floor((propsData.price * 81.9) + (propsData.price * 81.9) * discount(propsData.discountPercentage))).toLocaleString('en-IN')}</del>
                            <br/></span>
                    </div>
                    <div>
                        <span
                            style={{
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>Inclusive of all taxes
                            <br/>No Cost EMI Available</span>
                    </div>
                    <div>
                        <span
                            style={{
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>
                            <em>{"Rating : " + propsData.rating}
                                &#9733;
                            </em>
                        </span>
                    </div>
                    <div className='row my-5'>
                        {/* <div className='col'></div> */}
                        <div className='col-2 px-2 mx-2 text-center'>
                            <img
                                className='d-block mx-auto'
                                src={delivery}
                                style={{
                                width: "40px",
                                height: "40px"
                            }}
                                alt="product"/>
                            <br/>
                            <b
                                style={{
                                fontSize: "small"
                            }}>Free delivery</b>
                        </div>
                        <div className='col-2 px-2 mx-2 text-center'>
                            <img
                                className='d-block mx-auto'
                                src={replacement}
                                style={{
                                width: "40px",
                                height: "40px"
                            }}
                                alt="product"/>
                            <br/>
                            <b
                                style={{
                                fontSize: "small"
                            }}>
                                7 Days Replacement</b>
                        </div>
                        <div className='col-2 px-2 mx-2 text-center'>
                            <img
                                className='d-block mx-auto'
                                src={secure}
                                style={{
                                width: "40px",
                                height: "40px"
                            }}
                                alt="product"/>
                            <br/>
                            <b
                                style={{
                                fontSize: "small"
                            }}>Secure payment</b>
                        </div>
                        <div className='col-2 px-2 mx-2 text-center'>
                            <img
                                className='d-block mx-auto'
                                src={warranty}
                                style={{
                                width: "40px",
                                height: "40px"
                            }}
                                alt="product"/>
                            <br/>
                            <b
                                style={{
                                fontSize: "small"
                            }}>3 Months Warranty</b>
                        </div>
                        {/* <div className='col'></div> */}
                    </div>
                    <div className='row'>
                      <div className='col-1'></div>
                      <div className='col-6'>
                      <button className=" d-block mx-auto btn btn-success" style={{width : "100%"}} type="button">Buy</button>
                      </div>
                    </div>
                </div>
                <div className='col'></div>
            </div>

            <div className='row container my-5'>
                <h1 className='display-4 text-center my-5' >
                    From the Manufacturer
                </h1>
                {
                    imgs.map((elem, index) => {
                        if (index < 3) {
                            return <div className='d-block mx-auto col-3 mx-2' key={index}>
                                <img src={elem} alt='imgs' width={"100%"} height={"400px"}/>
                            </div>
                        }

                        return true;
                    })
                }
                <h2 className='text-center my-5'>
                    {propsData.brand}
                </h2>
            </div>
        </div>
    );
}
