import CartItems from './CartItems';
import data from './Api/cart.json';
import './mainstyle.css';

// Cart Items Component

export default function Content() {
    let articles  = data;
    let count = articles.length;
    let total = 0;

    for(let i=0;i<count;i++){
        total = total+articles[i].price;
    }

  return (
    <div>
        <div className='row'>
            {
                articles.map((element,index) => {
                    return <div className='col-lg-3' key={index} >
                                <CartItems 
                                    imgurl={element.thumbnail}
                                    title={element.title[0].toUpperCase()+element.title.substring(1)}
                                    price={Math.floor(element.price * 81.79)}
                                    rating={element.rating}
                                    disc={element.discountPercentage}
                                    object={element} />
                            </div>
                })
            }
        </div>

        <div className='summary'>
            <div>
                <h5>Subtotal({count} Items) : &#8377; {(Math.floor(total * 81.79)).toLocaleString('en-IN')}</h5>
            </div>
            <div>
                <button type="button" className="btn btn-primary btn-lg">Proceed to Buy</button>
            </div>
        </div>
    </div>
  );
}
