import { Outlet, Link,useNavigate } from "react-router-dom";
import "./app.scss";
import { useState,React, } from "react";
import Cart from "./element/cart";
import { useSelector,useDispatch } from "react-redux";
import { isShowCartapi } from "./store/modules/goodListStore";
function App() {
  const { goodList,isShowCart } = useSelector((state) => state.goodList);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <div className="App">
      <div className="nav">
        <div className="top">
          <div className="content">
            <div className="left">
              <p>
                Call Us: +1 213 974-5859
                <a className="email">Email:toystore@template.com</a>
              </p>
            </div>
            <div className="right">
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="content">
            <div className="left">
              <Link className="biga" to='/toystore'>ToyStore</Link>
              <Link to="/">Catalog</Link>
              <Link to="/delivery">Delivery</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contacts</Link>
              <Link to="/admin">Admin</Link>
            </div>
            <div className="right" onClick={() => dispatch(isShowCartapi(true))}>
              <div className="cart">Cart</div>
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg"></img>
              <div className="num">
                {goodList.reduce((total, item) => total + item.num, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 二级路由出口 */}
      <div className="center">
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <div className="content">
          <div className="top">
            <div className="left">ToyStore</div>
            <div className="cent">
              <a>Home</a>
              <a>Catalog</a>
              <a>Delivery</a>
              <a>About</a>
              <a>Contacts</a>
            </div>
            <div className="right">
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"></img>
              </a>
              <a href="http://elasticthemes.com" target="_blank">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"></img>
              </a>
            </div>
          </div>
          <div className="bot">
            <div className="left">
              <p>
                Created With love by <ins>Elastic Themes</ins>
              </p>
            </div>
            <div className="right">
              Powered by <ins>Webflow</ins> · <ins>StyleGuide</ins> ·{" "}
              <ins>Licensing</ins>
            </div>
          </div>
        </div>
      </div>
      {/* 购物车-----首页结构之外 */}
      {isShowCart && <Cart />}
    </div>
  );
}

export default App;
