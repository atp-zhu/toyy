import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './admin.scss';

const PAGE_SIZE = 6;
const LOCAL_STORAGE_KEY = 'toyShopGoodsList';

// 获取商品数据函数
export const getGoodsList = () => {
  const storedGoods = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedGoods) {
    return JSON.parse(storedGoods);
  } else {
    return [];
  }
};

// 更新商品数据函数
export const updateGoodsList = (newList) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
  return newList;
};

// 导出默认商品数据，其他组件可以使用
export const defaultGoodsList = [
  {
    id:1001,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png',
    name:'Teddy Bear',
    price:30.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1002,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png',
    name:'Happy Flower',
    price:38.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1003,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png',
    name:'Mega Pluseh Toy',
    price:38.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1004,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png',
    name:'Lift Machine',
    price:24.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1005,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png',
    name:'Cute Dog',
    price:24.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1006,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png',
    name:'Wooden Cemera',
    price:32.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1007,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png',
    name:'Little Rabbit',
    price:16.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1008,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png',
    name:'Little Friend',
    price:27.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1009,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min.png',
    name:'Christmas Deer',
    price:19.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1010,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min.png',
    name:'Rainbow Truck',
    price:28.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1011,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min.png',
    name:'Pluto Yellow Dog',
    price:28.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1012,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min.png',
    name:'Happy Dog',
    price:30.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1013,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min.png',
    name:'Caterpillar',
    price:18.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1014,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min.png',
    name:'Grey Elephant',
    price:45.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1015,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min.png',
    name:'Wooden Tractor',
    price:22.00,
    type:'stuffed',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
  {
    id:1016,
    imgUrl:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min.png',
    name:'Funny Clown',
    price:36.00,
    type:'wooden',
    describe:'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.'
  },
];

const Admin = () => {
  const [goodsList, setGoodsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    imgUrl: '',
    name: '',
    price: '',
    type: '',
    describe: ''
  });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 初始化时从本地存储加载数据
  useEffect(() => {
    const storedGoods = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedGoods) {
      setGoodsList(JSON.parse(storedGoods));
    } else {
      // 如果本地没有数据，则使用默认数据并存入本地
      setGoodsList(defaultGoodsList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultGoodsList));
    }
  }, []);

  // 更新本地存储的函数
  const updateLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  const handleDelete = (id) => {
    if (window.confirm('确定要删除这个商品吗？')) {
      const newList = goodsList.filter(item => item.id !== id).map((item, idx) => ({
        ...item,
        id: 1001 + idx
      }));
      setGoodsList(newList);
      updateLocalStorage(newList); // 更新本地存储
      
      // 如果删除后当前页没有数据，自动跳转到上一页
      const totalPage = Math.ceil((newList.length) / PAGE_SIZE);
      if (currentPage > totalPage) setCurrentPage(totalPage);
    }
  };

  const handleEdit = (id) => {
    const good = goodsList.find(item => item.id === id);
    setFormData({
      imgUrl: good.imgUrl,
      name: good.name,
      price: good.price,
      type: good.type,
      describe: good.describe
    });
    setEditId(id);
    setShowModal(true);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.imgUrl) newErrors.imgUrl = '请上传商品图片';
    if (!formData.name) newErrors.name = '请输入商品名称';
    if (!formData.price) newErrors.price = '请输入商品价格';
    if (!formData.type) newErrors.type = '请输入商品类型';
    if (!formData.describe) newErrors.describe = '请输入商品描述';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let updatedList;
      if (editId) {
        // 编辑商品
        updatedList = goodsList.map(item => item.id === editId ? {
          ...item,
          ...formData,
          price: Number(formData.price)
        } : item);
        setGoodsList(updatedList);
      } else {
        // 添加商品
        const newGood = {
          id: goodsList.length > 0 ? goodsList[goodsList.length - 1].id + 1 : 1001,
          ...formData,
          price: Number(formData.price)
        };
        updatedList = [...goodsList, newGood];
        setGoodsList(updatedList);
      }
      
      // 更新本地存储
      updateLocalStorage(updatedList);
      
      setShowModal(false);
      setFormData({
        imgUrl: '',
        name: '',
        price: '',
        type: '',
        describe: ''
      });
      setEditId(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAdd = () => {
    setFormData({
      imgUrl: '',
      name: '',
      price: '',
      type: '',
      describe: ''
    });
    setEditId(null);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setFormData({
      imgUrl: '',
      name: '',
      price: '',
      type: '',
      describe: ''
    });
    setEditId(null);
    setErrors({});
  };

  // 分页相关
  const totalPage = Math.ceil(goodsList.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const pageGoods = goodsList.slice(startIdx, endIdx);

  return (
    <div className="admin-container">
      <div className="header">
        <h1>商品管理</h1>
        <Link to="/">返回首页</Link>
        <button className="add-btn" onClick={handleAdd}>添加商品</button>
      </div>
      
      <table className="goods-table">
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品图片</th>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品类型</th>
            <th>商品描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {pageGoods.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.imgUrl} alt={item.name} className="goods-img" />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.type}</td>
              <td className="describe-cell">{item.describe}</td>
              <td>
                <div className="action-btns">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(item.id)}
                    disabled={item.id <= 1016}
                  >
                    编辑
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                    disabled={item.id <= 1016}
                  >
                    删除
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 分页器 */}
      <div className="pagination">
        {Array.from({ length: totalPage }, (_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editId ? '编辑商品' : '添加商品'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <label>商品图片：</label>
                <input
                  type="text"
                  name="imgUrl"
                  value={formData.imgUrl}
                  onChange={handleInputChange}
                  placeholder="请输入图片URL"
                />
                {errors.imgUrl && <span className="error">{errors.imgUrl}</span>}
              </div>
              <div className="form-item">
                <label>商品名称：</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="请输入商品名称"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-item">
                <label>商品价格：</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="请输入商品价格"
                  step="0.01"
                />
                {errors.price && <span className="error">{errors.price}</span>}
              </div>
              <div className="form-item">
                <label>商品类型：</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">请选择商品类型</option>
                  <option value="stuffed">stuffed</option>
                  <option value="wooden">wooden</option>
                </select>
                {errors.type && <span className="error">{errors.type}</span>}
              </div>
              <div className="form-item">
                <label>商品描述：</label>
                <textarea
                  name="describe"
                  value={formData.describe}
                  onChange={handleInputChange}
                  placeholder="请输入商品描述"
                />
                {errors.describe && <span className="error">{errors.describe}</span>}
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">提交</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>取消</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;