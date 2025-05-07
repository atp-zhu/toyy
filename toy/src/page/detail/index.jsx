import './detail.scss';
import Navpath from '../../element/navpath';
import { useSearchParams, } from 'react-router-dom';
import toysList from '../../utils/data'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoods,isShowCartapi } from '../../store/modules/goodListStore';

const Detail=()=>{
 const [params]=useSearchParams()
 const dispatch=useDispatch()
 const goodsId=params.get('id')
//  通过id获取商品详情
 const {id,imgUrl,name,price,describe}=toysList.find(item=>item.id==goodsId)
//  设置商品数量
const [goodNum,setGoodNum]=useState(1)

const addCartHandler=()=>{
const goodInfo={id,imgUrl,name,price,describe,num:goodNum}
  dispatch(addGoods(goodInfo))
  dispatch(isShowCartapi(true))
}












// 商品详情结构
  return(
    <div className='navpath'>
     
      <Navpath></Navpath>
      {/* 这里是商品详情页面 */}
      <div className="gooddetail">
       <div className="goods">
        <div className="left">
         <div className="title">{name}</div>
         <div className="descr">{describe}</div>
         {/* 取小数点后两位 */}
         <div className="price">${Number(price).toFixed(2)}USD</div>
         <div className="but">
          <div className="left">
            {/* 修改商品数量的胶囊按钮 */}
            <div className="num">{goodNum}</div>
            <div className='img'>
              <img src="/add.jpg" onClick={()=>{setGoodNum(goodNum+1)}}/>
            <img src="/down.jpg" onClick={()=>{
              setGoodNum(goodNum-1)
            }} />
            </div>
          </div>
          <div className="addcart"  onClick={()=>addCartHandler()}>Add to Cart</div>
         </div>
        </div>
        <img src={imgUrl} alt="" />
       </div>
       {/* 商品详情页下面文本部分 */}
       <div className="product">
        <div className="top">
          <div className="title">Product Details</div>
          <p>SKU:35009</p>
        </div>
         <div className="cen">
         <p className="line"></p>
         <p className='linee'></p>
       </div>
       <div className="bot">
        <div className="left">
          <h3>Add Your Product Description</h3>
          <p className="p1">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
          <h3>Simple & Elegant Template</h3>
          <p className="p2">Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
          <ul>
            <li>Beautifully Designed</li>
            <li>Fully Responsive</li>
            <li>CMS Content</li>
            <li>Smooth Animations</li>
          </ul>
          <p className='p3'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
          <h4>Perfect Choice for Your Business</h4>
          <p className="p4">
            Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds. This is where your benefits come into play or a product description that sets your offer apart from the others.
          </p>
        </div>
        <div className="right">
          <div className="box">
           <div className="wid">Width</div>
           <div className="in">38 in</div>
          </div>
        <div className="box">
           <div className="wid">Height</div>
           <div className="in">32 in</div>
          </div>        <div className="box">
           <div className="wid">Length</div>
           <div className="in">21.5 in</div>
          </div>        <div className="box">
           <div className="wid">Weight</div>
           <div className="in">24 in</div>
          </div>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}
export default Detail;
