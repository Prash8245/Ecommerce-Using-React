import Items from './items';
import './mainstyle.css';

// Content Component Lists All the Available Items

export default function Content(props) {
    let articles  = props.data;

  return (
    <div className='row'>
        {
            articles.map((element,index) => {
                return <div className='col-lg-3' key={index} >
                        <Items 
                          imgurl={element.thumbnail}
                          title={element.title[0].toUpperCase()+element.title.substring(1)}
                          price={Math.floor(element.price * 81.79)}
                          rating={element.rating}
                          disc={element.discountPercentage}
                          object={element} /></div>
            })
        }
    </div>
  );
}
