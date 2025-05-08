import useScaleInView from '../../hooks/useScaleInView';
import './instagram.scss'

const Instagram=()=>{
  const [ref, inView] = useScaleInView();
  return(
    <div
      className={`instagram ${inView ? 'scale-in' : 'scale-init'}`}
      ref={ref}
    >
      <div className="top">
        We're on Instagram
      </div>
      <div className="imgs">
        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" /> <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" /> <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" /> <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" /> <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" /> <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" />
      </div>
      <div className="bottom">See More Photos</div>
    </div>
  )
}
export default Instagram