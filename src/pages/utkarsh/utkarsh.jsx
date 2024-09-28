import Nav from '../../components/nav/nav'
import './utkarsh.css'
import { Link } from 'react-router-dom';
import {useState} from 'react'

export default function Utkarsh() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    return (
        <>
            <Nav />
            <div id="login">
                <input type="text" placeholder="Enter username" id="user" value={user} onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Enter password" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <input type="button" value="Authenticate" id="submit" style={{opacity: (user.trim()!=='' && pass.trim()!=='')?1:.5}}</input>/>
            </div>
        </>
    )
}
