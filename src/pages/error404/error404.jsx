import Nav from "../../components/nav/nav"
import './error404.css'

export default function Error(){
    return(
        <>
            <Nav />
            <div id="notFound">
                <div>The Page You Are Looking For Has Not Found</div>
            </div>
        </>
    )
}
