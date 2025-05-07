import './newsletter.scss'

// 新闻组件
const Newsletter=()=>{
  return(
    <div className="newsletter">
      <div className="left">
        <div className="log">
          <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg" alt="" />
        </div>
        <div className="title">
          <p>Subscribe to our newsletter& get <span>10% discount!</span></p>
        </div>
      </div>
      <div className="right">
        <input className="input" placeholder="Enter your email"></input>
        <div className="subscribe">Subscribe</div>
      </div>
    </div>
  )
}
export default Newsletter