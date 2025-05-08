import "./contacts.scss"
import Navpath from "../../element/navpath"
import Instagram from "../../element/instagram"
import Newsletter from "../../element/newsletter"
const Contacts=()=>{
  return <div className="contacts">
    <Navpath></Navpath>
    <div className="center">
      <div className="mapp">
        <iframe
          title="google-map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, borderRadius: "20px", width: "100%", height: "500px" }}
          src="https://www.google.com/maps?q=London&output=embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bot">
        <div className="left">
        <h2>Leave a Message</h2>
        <from>
          Full Name <br />
          <input type="text" placeholder="Enter your name"/><br />
          Email Address <br />
          <input type="text" placeholder="Enter your email"/><br />
          Email Address <br />
          <textarea placeholder="Enter your message"/><br />
          <button>Send Message</button>
        </from>
      </div>
      <div className="right">
        <h2>Contact Info</h2>
        <p>4293  Euclid Avenue, Los Angeles, CA 90012 <br /> +1 213 974-3898</p>
        <a className="aa" href="mailto:Your Email Here?subject=ToyStore">toystore@template.com</a>
        <h3>Follow Us</h3>
        <div className="img">
          <a href=""><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" /></a>
          <a href=""><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" /></a>
          <a href=""><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" /></a>
          <a href=""><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" /></a>
          <a href=""><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" /></a>
        </div>
      </div>
      </div>
    </div>
    <Instagram></Instagram>
    <Newsletter></Newsletter>
  </div>
}

export default Contacts;
