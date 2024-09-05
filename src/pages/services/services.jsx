import Nav from '../../components/nav/nav'
import './services.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Nav />
            <section id="serviceSection">
              <font className="service">Website Design</font>
              <p>The website you want will be designed only on <span>₹300/–</span> and will charges extra if you don't have domain and hosting.</p>
              <font className="heading">What is hosting and Domain ? –</font>
              <p>Once your website is designed, it is needed to be listed on the internet. There are two things to have : <br/>1) <span>Domain</span> - In simple words, the domain is just like the name or identity of the website. For example : <span>google.com</span>, <span>youtube.com</span>, <span>instagram.com</span>, etc. It consists of two parts, the first one which is before <span>.</span> and the second one which is after <span>.</span> In <span>google.com</span>, the first one is <span>google</span> and second is <span>.com</span>. The <span>google</span> is the name of the website which you can keep any name. The second one is domain and cannot be kept custom, they are pre-defined. Some of them are <span>.com</span>, <span>.in</span>, <span>.net</span>, <span>.site</span>, <span>.org</span>, etc. They have their own meaning and their prices may vary.<br/>2) <span>Hosting</span> - The <span>hosting</span> is the server which runs <span>24/7</span> and keep live your website. They are just an another computer which runs <span>24/7</span> and have it's own <span>IP</span> address which is connected with domain. It's price increases as it's specifications increases. It can have <span>2gb</span> of <span>RAM</span> or <span>16gb</span>. Same case in <span>CPU</span> also.<br/><br/>After these things, your website is ready to be seen online.</p>
              <font className="service price">Pricing</font>
              <p>1) <span>Website Design </span> -<br/>We design your website in just <span>₹300/–</span><br/><br/>2) <span>Hosting</span> -<br/>Hosting price are not one time as it's needed to be renewed every year.<br/>₹7,999<span>/year</span><br/>₹13,000<span>/2 year</span><br/><br/>3) <span>Domain</span> -<br/>Domain price are also not one time as it's also needed to be renewed every year.<br/>₹999<span>/year</span><br/>₹1,899<span>/2 year</span></p>
            </section>
        </>
    )
}
