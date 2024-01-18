import Nav from "../../components/nav/nav"
import './error404.css'

export default function Error(){
    return(
        <>
            <Nav />
            <div id="notFound">
                <div>404</div>
                <div>Page Not Found</div>
            </div>
        </>
    )
}