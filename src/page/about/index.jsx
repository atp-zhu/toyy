import Navpath from "../../element/navpath"
import Simple from "../../element/simple"
import Watch from "../../element/watch"
import Newsletter from "../../element/newsletter"
import Instagram from "../../element/instagram"
import "./about.scss"

const About=()=>{
  return <div className="about">
    <Navpath></Navpath>
    <div className="toystore">
      <p className="p1">All You Need is Fun!</p>
      <p className="p2">Introducing ToyStore</p>
      <p className="p3">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convinceconsumers to take action.</p>
      <p className="sp1">More About Us</p>
      <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image.jpg" alt="" />
    </div>
    <Simple></Simple>
    <div className="simple1">
    <div className="bottom">
      <div className="left">
        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02.jpg" alt="" />
        
      </div>
      <div className="right">
       <div className="p1">
          100% Responsive
        </div>
        <div className="p2">

        </div>
        <div className="p3">
          A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy
        </div>
        <div className="p4">GET IT NOW!</div>
      </div>
    </div>
  </div>
     {/* 透明背景 */}
    <div className="bc">
      <Watch></Watch>
    </div>
    <div className="section4">
      <Newsletter></Newsletter>
      <Instagram></Instagram>
    </div>
  </div>
}

export default About;
