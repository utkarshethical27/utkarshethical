import Nav from '../../components/nav/nav'
import './utkarsh.css'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Utkarsh() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [logined, setLogined] = useState(true)
    const [showWel, setShowWel] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [showUpload, setShowUpload] = useState(false)
    const [file, setFile] = useState('Select File')
    const [fileData, setFileData] = useState()
    const [fileText, setFileText] = useState('')
    const [fileName, setFileName] = useState('')

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
                        document.getElementById('files').appendChild(file)
                    })
              //  }else{
         //           alert('Password Galat Hai')
        //        }
          //  }else{
           //     alert('Username Galat Hai')
          //  }
       // }
    }

    useEffect(()=>{
        login()
    }, [])

    const filePicked = (e) => {
        setFile(e.target.files[0].name)
        setFileData(e.target.files[0])
    }

    const upload = async () => {
        try{
          const formdata = new FormData()
          formdata.append('file', fileData)
          const result = await fetch('https://utkarshethicalserver.vercel.app/api/uploadFile/', {
              method: "POST",
              body: formdata,
              headers: {
                'Content-Type': 'multipart/form-data',
              }
          })
          if(result.data === 'success')
              alert('File uploaded successfully')
          else
              alert(result.data)
        }catch(e){alert(e)}
    }

    const create = async () => {
        const result = axios.post('https://utkarshethicalserver.vercel.app/api/createFile/', {
            fileName: fileName,
            fileText: fileText
        })
        if(result.data === 'success')
            alert('File created successfully')
        else
            alert('File creating failed')
    }
    
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
                    <button id="uploadBut" onClick={()=>setShowUpload(true)}><i className='fas fa-upload'></i>Upload File</button>
                    <button id="createBut" onClick={()=>setShowCreate(true)}><i className='fas fa-plus'></i>Create File</button>
                </div>
                <div id="files"></div>
            </>)}
            {showUpload && (<>
                <div id="uploadBack"></div>
                <div id="upload">
                    <input type="file" id="fileInput" style={{display: 'none'}} onChange={filePicked}/>
                    <label for="fileInput"><i className="fas fa-file"></i></label>
                    <input id="file" value={file} disabled/>
                    <i className="fas fa-xmark" onClick={()=>{setShowUpload(false); setFile('Select File'); setFileData()}}></i>
                    <button id="uploadBut" onClick={upload} style={{display: file==='Select File'?'none':'flex'}}><i className='fas fa-upload'></i>Upload</button>
                </div>
            </>)}
            {showCreate && (<>
                <div id="createBack"></div>
                <div id="create">
                    <textarea id="createFileText" multiline value={fileText} onChange={(e)=>setFileText(e.target.value)} placeholder="Enter file text"></textarea>
                    <input type="text" id="fileNameInput" value={fileName} onChange={(e)=>setFileName(e.target.value)} placeholder="Enter file name"/>
                    <i className="fas fa-xmark" onClick={()=>{setShowCreate(false); setFileName(''); setFileText()}}></i>
                    <button id="createBut" onClick={create}><i className='fas fa-plus'></i>Create</button>
                </div>
            </>)}
        </>
    )
}
