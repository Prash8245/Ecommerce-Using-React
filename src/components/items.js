import './mainstyle.css';
import {Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { Addalert } from './context/alertContext';

//Items Card Component

export default function Item(props) {
    let {title, price, imgurl, disc, object} = props;

    // Use Context Hook
    const a = useContext(Addalert);

    //Calculate Discount %
    const discount = () => {
        var percent = disc / 100;
        return percent;
        
    }

    return (
        <div className="my-3">
            <div className="card item">
                <img
                    src={
                    imgurl}
                    className="card-img-top p-3"
                    alt= {title}
                    height={'184px'}/>

                <div className="card-body">
                    <h5 className="card-title">
                        { title.slice(0, 17) + "..." }
                    </h5>
                    <p className="card-text">
                        <b>&#8377; {price.toLocaleString('en-IN')}</b>
                        &nbsp; &nbsp; &nbsp;<del>
                            &#8377; {(Math.floor(price + price * discount())).toLocaleString('en-IN') + " "}</del>
                        <br/>
                    </p>
                    <div className='buttons'>
                        <Link to="/product" state={object}>
                            <button className='btn btn-dark'>Buy</button>
                        </Link>
                        <button className='btn btn-dark' onClick={()=>
                            {
                                a.SetalertShow(true);

                                // Set Timer To disable alert msg after 1 sec
                                setTimeout(() => {
                                    a.SetalertShow(false);
                                }, 2000);
                            }}>Add to cart</button>
                    </div>

                </div>
            </div>

        </div>
    );

}
