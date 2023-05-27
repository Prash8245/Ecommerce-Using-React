import React from 'react';
import logo from './My project-1 (1).png';

// Footer Component

export default function Footer() {
  return (
    <div id='footer' className='container-fluid' style={{backgroundColor:'#131A22',color:'white'}}>
        <div className='d-block mx-auto'>
            <img src={logo} alt='logo' style={{width:'250px'}} />
            <h5>INDIA</h5>
        </div><br/>
        <div>
            <span className='mx-3'>Conditions of Use & Sale</span> 
            <span className='mx-3'>Privacy Notice</span> 
            <span className='mx-3'>Interest-Based Ads</span> <br/><br/>
            <span className='mx-3'>&copy; CopyRights @ 2023 </span>
        </div>
    </div>
  );
}
