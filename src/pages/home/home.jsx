import Nav from '../../components/nav/nav'
import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Nav />
            <section id="home">
                <div id="center">
                    <div>Need a website for your business?<br/>Get a website in just <span>₹300/–</span>
                    <div>Note :- This price is only for website designing(exclusive of domain and hosting). <Link to="/services" id="vd">View details</Link></div>
                    </div>
                    <Link to="https://wa.me/+919005674186" id="cn">Contact Now</Link>
                </div>
            </section>
            <section id="customers">
                <h1 className='title'>My Clients</h1>
            </section>
        </>
    )
}
