
import './toystores.scss'
import List from '../../utils/data'
import Alltoys from '../../element/toyslist/index'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Watch from '../../element/watch';
import Simple from '../../element/simple';
import Newsletter from '../../element/newsletter';
import Instagram from '../../element/instagram';

const ToyStore = () => {
const [list,setList]=useState(List)
const stulist=list.slice(0, 4);
const woodenlist=list.slice(-4);
const navigate=useNavigate()




  return <div className="toystore">
    <div className="banimg">
      <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg" alt="" />
      <div className="centerbox">
        <div className="p1">Say Hello to Toystare!</div>
        <div className="p2">Free Ecommerce  <br />Template for Webflow</div>
        <div className="p3">Open Catalog</div>
      </div>
    </div>
    <div className="section">
      <div className="left">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png" alt="" />
   <div className="title">
           <div className="p1">Stuffed Animals</div>
          <div className="p2">Shop Now</div>
   </div>
      </div>
      <div className="right">
        <div className="title">
          <div className="p1">Wooden Toys</div>
          <div className="p2">Shop Now</div>
        </div>
        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png" alt="" />
      </div>
    </div>
    {/* 引入组件 */}
    <div className="section2">
  <Alltoys title="Stuffed Animals" 
right={<div className="p2" onClick={()=>navigate('/')}>See All Toys →</div>} 
list={stulist}></Alltoys>
    </div>
    <div className="section2">
  <Alltoys title="Stuffed Animals" 
right={<div className="p2" onClick={()=>navigate('/')}>See All Toys →</div>} 
list={woodenlist}></Alltoys>
    </div>
    {/* 透明背景 */}
    <div className="bc">
      <Watch></Watch>
    </div>
    <div className="section3">
      <Simple></Simple>
    </div>
    <div className="section4">
      <Newsletter></Newsletter>
      <Instagram></Instagram>
    </div>
  </div>;
  
};

export default ToyStore;


