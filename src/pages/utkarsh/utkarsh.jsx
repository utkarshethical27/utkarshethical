import Nav from '../../components/nav/nav'
import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Nav />
            <div id="login">
                <input type="text" placeholder="Enter username" id="user"/>
                <input type="password" placeholder="Enter password" id="pass"/>
                <input type="button" value="Authenticate" id="submit"/>
            </div>
        </>
    )
}
