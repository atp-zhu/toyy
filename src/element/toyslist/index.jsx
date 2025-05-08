import { Link } from 'react-router-dom'
import './toy.scss'

// 这个是alltoys组件 title，右边的模块，和要渲染的数据是通过props传值，结构出来
const Alltoys=({title,right,list=[]})=>{















  // 结构部分==================================================================
  return(
    <div className="alltoy">
       <div className="top">
        <div className="title">{title}</div>
        <div className='right'>
          {/* 这部分是右边模块，直接写在{}里面，就可以接收到父组件传过来的结构 */}
          {right}
        </div>
       </div>
       <div className="cen">
         <p className="line"></p>
         <p className='linee'></p>
       </div>
       <div className="bot">
        {/* 这部分是要渲染的数据，要写在{}里面，因为要遵循jsx语法 */}
        {list.map((item)=>{
          return(
            // key可以写在跳转标签上，如果跳转标签是跟节点，则key要写在跟节点上
            // Link 组件包裹商品列表，而 Link 默认会给文本添加下划线样式。
            <Link to={`/detail?id=${item.id}`} key={item.id}>
            <div className='list'>
              <img src={item.imgUrl} alt="" />
              <p>{item.name}</p>
              <div className='price'>${Number(item.price).toFixed(2)}USD</div>
            </div>
            </Link>
          )
        })}
       </div>
    </div>

  )
}
export default Alltoys