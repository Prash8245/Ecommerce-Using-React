import React from 'react';
import home1 from './Assets/home.jpg';
import home2 from './Assets/Home2.jpg';
import home3 from './Assets/home3.jpg'
import home from './Assets/home4.webp';
import article from './Api/all.json';

// Home Components

export default function Home() {
  
  return (
    <div style={{overflowX:'hidden','backgroundColor': '#FFB2A7'}}>
        <div>
          {/* Banner Image  */}
          < img src={home} alt='banner' style={{width:'100%'}} />     
          
          <div className='row'>
            <div className='col'></div>

            {/* Deals Cards */}
            <div className='col-sm-3 mx-3 my-3'>
              <div className="card homeitem" style={{width:'400px'}}>
                  <h4 className="card-title p-2">Summer Deals</h4>
                  <img className="card-img-top p-3" src={home1} alt="Card" style={{width:'100%'}} />
                  <div className="card-body">
                    <p className="card-text text-start"> <a href='/' style={{textDecoration:'none'}}> See More </a> </p>
                  </div>
              </div>
            </div>

            {/* Deals Cards */}
            <div className='col-sm-3 mx-3 my-3'>
              <div className="card homeitem" style={{width:'400px'}}>
                  <h4 className="card-title p-2">Up to 60% off | Smart Watches</h4>
                  <img className="card-img-top p-3" src={home2} alt="Card" style={{width:'100%'}} />
                  <div className="card-body">
                    <p className="card-text text-start"> <a href='/' style={{textDecoration:'none'}}> See More </a> </p>
                  </div>
              </div>
            </div>
            
            {/* Deals Cards */}
            <div className='col-sm-3 mx-3 my-3'>
              <div className="card homeitem" style={{width:'400px'}}>
                  <h4 className="card-title p-2">Up to 70% off | Clearance store</h4>
                  <img className="card-img-top p-3" src={home3} alt="Card" style={{width:'100%'}} />
                  <div className="card-body">
                    <p className="card-text text-start"> <a href='/' style={{textDecoration:'none'}}> See More </a> </p>
                  </div>
              </div>
            </div>

            <div className='col'></div>
          </div>

          {/* Deals Cards */}
          <div className='row mx-5 my-3' style={{backgroundColor:'white'}}>
            <h2 className='text-center p-3 mt-2'>Today's Deals</h2>
            <div className='col'></div>
            <div className='col-sm-3 p-2'>
              <div className="card homeitem">
                      <img className="card-img-top p-3 deals" src={article[0].thumbnail} alt="Card" style={{width:'100%'}} />
                      <div className="card-body">
                      <p className="card-text text-center"> Mega Price drop: On Apple Products <br/> <br/> <span className='p-1 my-2' style={{backgroundColor:'#CC0C39',color : 'white'}}>Up to {article[0].discountPercentage} % off</span> <br/> <span className='my-1' style={{color:'#CC0C39'}}>Deal of the Day</span> </p>
                      </div>
              </div>
            </div>

            {/* Deals Cards */}
            <div className='col-sm-3 p-2'>
              <div className="card homeitem">
                      <img className="card-img-top p-3 deals" src={article[3].thumbnail} alt="Card" style={{width:'100%'}} />
                      <div className="card-body">
                        <p className="card-text text-center"> Oppo Products On Deal <br/><br/> <span className='p-1 my-2' style={{backgroundColor:'#CC0C39',color : 'white'}}>Up to {article[3].discountPercentage} % off</span> <br/> <span className='my-1' style={{color:'#CC0C39'}}>Deal of the Day</span> </p>
                      </div>
              </div>
            </div>

            {/* Deals Cards */}
            <div className='col-sm-3 p-2'>
              <div className="card homeitem">
                <img className="card-img-top p-3 deals" src={article[8].thumbnail} alt="Card" style={{width:'100%'}} />
                <div className="card-body">
                  <p className="card-text text-center"> Laptops Fest Summer Deals  <br/><br/> <span className='p-1 my-4' style={{backgroundColor:'#CC0C39',color : 'white'}}>Up to {article[8].discountPercentage} % off</span> <br/> <span className='my-4' style={{color:'#CC0C39'}}>Deal of the Day</span> </p>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
    </div>
  );
}
