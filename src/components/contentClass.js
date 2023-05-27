import React, { Component } from 'react';
import Items from './items';

export default class Contentclass extends Component {
    
    constructor(){
        super();
        this.state = {
            Articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        let dataurl = `https://dummyjson.com/products/${this.props.category}?limit=100`;
        let data = await fetch(dataurl);
        let parsedData = await data.json();

        console.log(parsedData.products);

        this.setState({
            Articles : parsedData.products
        })
    }
  render() {
    return (
        <div className='row'>
        {
            this.state.Articles.map((element) => {
                return <div className='col-lg-3' key={element.id} >
                        <Items 
                            imgurl={element.thumbnail} 
                            title={element.title} 
                            price={element.price} 
                            rating={element.rating} 
                            disc={element.discountPercentage} 
                            object={element} 
                            />
                        </div>
            })
        }

    </div>
    )
  }
}
