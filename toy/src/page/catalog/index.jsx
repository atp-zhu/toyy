import "./css/catalogstyle.scss";
import Alltoys from "../../element/toyslist"; 
import list from '../../utils/data';
import Cart from "../../element/cart";
import Navpath from "../../element/navpath";
import {useState,useEffect} from 'react'
import Newsletter from '../../element/newsletter'
import Instagram from '../../element/instagram'

// catalog页面
function Catalog(){
  const [lists,setLists]=useState(list)
  const [types,setType]=useState('all')
  const filterList=(type)=>{
    if(type==='all'){
      return setLists(list)
    }else if(type==='wooden'){  
      setType('wooden')
      return setLists(list.filter(item=>item.type==='wooden'))
    }else if(type==='stuffed'){
      setType('stuffed')
      return setLists(list.filter(item=>item.type==='stuffed'))
    }

  }




  // 1结构部分==================================================================
  return(
    <div className="catalogstyle">
      {/* 第一部分search */}
      <Navpath></Navpath>
      {/* 第二部分 alltoys */}
      <div className="alltoys">
        {/* 调用alltoys组件，传入title，right，list ，title是一个文本标题，right是一段结构，list是渲染的数据*/}
        <Alltoys title={'All Toys'} right={
          <div className="rig">
            <div className={types==='all'?'active':''} onClick={()=>filterList('all')}>All Toys</div>
            <div className={types==='wooden'?'active':''} onClick={()=>filterList('wooden')}>Wooden Toys</div>
            <div className={types==='stuffed'?'active':''} onClick={()=>filterList('stuffed')}>Stuffed Animals</div>
          </div>
          } list={lists}></Alltoys>

      </div>
      {/* 第三部分 订阅  单写组件*/}
      <div className="subscribe">
        <Newsletter></Newsletter>
      </div>
      {/* instagram  这里单写一个组件*/}
      <div className="ins"></div>
          <Instagram></Instagram>
    </div>
    
  )
}
export default Catalog