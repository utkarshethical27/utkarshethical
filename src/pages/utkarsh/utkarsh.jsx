import Nav from '../../components/nav/nav'
import './utkarsh.css'
import { Link } from 'react-router-dom';
import {useState} from 'react'

export default function Utkarsh() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [logined, setLogined] = useState(false)

    const login = () => {
        if(user.trim()!=='' && pass.trim()!==''){
            if(user.trim() === process.env.REACT_APP_USERNAME){
                if(pass.trim() === process.env.REACT_APP_PASSWORD){
                    setLogined(true)
                }else{
                    alert('Password Galat Hai')
                }
            }else{
                alert('Username Galat Hai')
            }
        }
    }
    
    return (
        <>
            <Nav />
            <div id="login">
                <input type="text" placeholder="Enter username" autocapitalize="off" id="user" value={user} onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Enter password" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <input type="button" value="Authenticate" id="submit" style={{opacity: (user.trim()!=='' && pass.trim()!=='')?1:.5}} onClick={login}/>
            </div>
        </>
    )
}
