import Nav from '../../components/nav/nav'
import './utkarsh.css'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios'

export default function Utkarsh() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [logined, setLogined] = useState(true)
    const [showWel, setShowWel] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [showUpload, setShowUpload] = useState(false)

    const login = async () => {
        //if(user.trim()!=='' && pass.trim()!==''){
            const res = await axios.get('https://utkarshethicalserver.vercel.app/api/getUP')
           // if(user.trim() === res.data.user){
            //    if(pass.trim() === res.data.pass){
                    setLogined(true)
                    setShowWel(true)
                    setTimeout(()=>{setShowWel(false)}, 1000)
                    const files = await axios.get('https://utkarshethicalserver.vercel.app/api/getFiles')
                    files.data.forEach((e)=>{
                        const file = document.createElement('div')
                        file.setAttribute('className','file')
                        file.innerHTML = '<a href='+e.secure_url+' className="fileText" target="_blank">'+e.display_name+'.'+e.format+'</a>'
                        document.getElementById('body').appendChild(file)
                    })
              //  }else{
         //           alert('Password Galat Hai')
        //        }
          //  }else{
           //     alert('Username Galat Hai')
          //  }
       // }
    }
login()
    
    return (
        <>
            <Nav />
            {showWel && (<><div id="welCover"></div>
            <div id="welBox">Welcome aboard captain!</div></>)}
            {!logined && (<div id="login">
                <input type="text" placeholder="Enter username" autocapitalize="off" id="user" value={user} onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Enter password" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <input type="button" value="Authenticate" id="submit" style={{opacity: (user.trim()!=='' && pass.trim()!=='')?1:.5}} onClick={login}/>
            </div>)}
            {logined && (<>
                <div id="action">
                    <input type="button" value="Upload Files" id="uploadBut" onClick={()=>setShowUpload(true)}/>
                    <input type="button" value="Create Files" id="createBut" onClick={()=>setShowCreate(true)}/>
                </div>
                <div id="files"></div>
            </>)}
            {showUpload && (<>
                <div id="uploadBack"></div>
                <div id="upload">
                    
                </div>
            </>)}
            {showCreate && (<>
                <div id="createBack"></div>
                <div id="create">
                    
                </div>
            </>)}
        </>
    )
}
