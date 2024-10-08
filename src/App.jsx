import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/home'
import Services from './pages/services/services'
import Posts from './pages/posts/posts'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Error404 from './pages/error404/error404'
import Post from './pages/post/post'
import Utkarsh from './pages/utkarsh/utkarsh'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts/" element={<Posts />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/utkarsh/" element={<Utkarsh />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
