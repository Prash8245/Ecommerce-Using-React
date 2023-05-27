import React from 'react';
import Sidebar from './sidebar';
import  './mainstyle.css';

//Main Component Joining both SideBar and Content Component

export default function main(props) {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div  className='col-lg-3 p-0'>
                  <Sidebar />
            </div>
            <div id='content' className='col'>
                {props.comp}
            </div>
        </div>
        
    </div>
  );
}
