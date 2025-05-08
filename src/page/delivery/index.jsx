import Navpath from "../../element/navpath"
import Newsletter from "../../element/newsletter"
import Instagram from "../../element/instagram"
import "./delivery.scss"
// delivery页面
const Delivery=()=>{
  return(
    <div className="delivery">
      <Navpath></Navpath>
      {/* <Cart></Cart> */}
      <div className="product">
        <div className="top">
          <div className="title">Delivery Info</div>
          <p>SKU:35009</p>
        </div>
         <div className="cen">
         <p className="line"></p>
         <p className='linee'></p>
       </div>
       <div className="bot">
        <div className="left">
          <h3>Add Your Product Description</h3>
          <p className="p1">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
          <h3>What’s a Rich Text element?</h3>
          <p className="p2">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
          <h3>Static and dynamic content editing</h3>
          <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</p>
          <ul>
            <li>Beautifully Designed</li>
            <li>Fully Responsive</li>
            <li>CMS Content</li>
            <li>Smooth Animations</li>
          </ul>
          <p className='p3'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
          <h3>How to customize formatting for each rich text</h3>
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
       <Newsletter></Newsletter>
       <Instagram></Instagram>
    </div>
  )
}
export default Delivery 