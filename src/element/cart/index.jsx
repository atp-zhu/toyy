import './cart.scss'
import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addGoods,removeGoodsnum,removeGoodsid,isShowCartapi,addGoodsnum } from '../../store/modules/goodListStore'

// 购物车组件
const Cart=()=>{
  // 如果这行代码放到if判断的后面，会报错
  // const [cartGoods,setCartGoods]=useState([1,2,3,4,5])
  // const [goodNum,setGoodNum]=useState(1)
  const {goodList}=useSelector(state=>state.goodList)
  const dispatch=useDispatch()
  // 计算购物车所有商品总价
  const countNum=goodList.reduce((total,item)=>total+item.price*item.num,0)

  // 购物车商品
  return(
    <div className="cart-container">
      <div className="cart-mask" onClick={()=>dispatch(isShowCartapi(false))}></div>
      <div className="cart">
        <div className='top'>
          <div className='title'>Your Cart</div>
          <div className='close' onClick={()=>dispatch(isShowCartapi(false))}>×</div>
        </div>
        <div className='cent'>
        {goodList.map(item=>{
          return(
            <div className="centlist" key={item.id}>
            <img src={item.imgUrl} alt="" />
          <div className="detail">
            <div className="name">{item.name}</div>
            <div className="price">${Number(item.price).toFixed(2)} USD</div>
            <div className="rem" onClick={()=>dispatch(removeGoodsid(item.id))}>Remove</div>
          </div>
          {/* 购物车里的胶囊按钮 */}
          <div className="num">
            <div className="left">
              <div className="numm">{item.num}</div>
              <div className='img'>
                <img src="/add.jpg" onClick={()=>dispatch(addGoodsnum(item))}/>
                <img src="/down.jpg" onClick={()=>dispatch(removeGoodsnum(item))} />
               </div>
            </div>
           <div className="right">
             <div className='add'></div>
            <div className="del"></div>
           </div>
          </div>
          </div>
          )
        })}
        </div>
        <div className='count'>
          <div className="left">Subtotal</div>
          <div className="num">${Number(countNum).toFixed(2)} USD</div>
        </div>
        <div className='commit'>Continue to Checkout</div>
      </div>
    </div>
  )
}
export default Cart