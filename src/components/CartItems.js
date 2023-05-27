import React from 'react';
import './mainstyle.css';

// Cart Items Card Component

export default function CartItem(props) {
    let {title,price,imgurl,disc} = props;
    const discount = ()=>{
        var percent = disc/100;
        return percent;
    }

    return (
        <div className="my-3">
                <div className="card item">
                    <img src={imgurl} className="card-img-top p-3" alt="..."  height={'184px'}/>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,17)+"..."}  </h5>
                        <p className="card-text"> 
                            <b>&#8377; {price.toLocaleString('en-IN')}</b> &nbsp; &nbsp; &nbsp;<del>&#8377; {(Math.floor(price+price*discount())).toLocaleString('en-IN')}</del> <br/>
                            {/* <em>{"Rating : "+rating} &#9733; </em> */}
                        </p>
                    </div>
                </div>
            </div>
    );
}
