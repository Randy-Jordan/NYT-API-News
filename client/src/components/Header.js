import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [menu,setShowMenu] = useState(false)
    let dropDown;

    if(menu){
        dropDown = <ul id="dropdown">
                        <li><Link to="/"><i className="fa-solid fa-house-chimney"></i>Home</Link></li>
                        <li><Link to="usnews"><i className="fa-solid fa-flag-usa"></i>Us News</Link></li>
                        <li><Link to="worldnews"><i className="fa-solid fa-earth-asia"></i>World News</Link></li>
                        <li><Link to="/newswire"><i className="fa-solid fa-newspaper"></i>News Wire</Link></li>
                        
                    </ul>
    }
  return (
    <>
    <header>
       <h2><Link to="/"><i class="fa-solid fa-tower-broadcast"></i> API NEWS</Link></h2>
       <ul id="desktop">
                        <li><Link to="/"><i className="fa-solid fa-house-chimney"></i>Home</Link></li>
                        <li><Link to="usnews"><i className="fa-solid fa-flag-usa"></i>Us News</Link></li>
                        <li><Link to="worldnews"><i className="fa-solid fa-earth-asia"></i>World News</Link></li>
                        <li><Link to="/newswire"><i className="fa-solid fa-newspaper"></i>News Wire</Link></li>
                        
                    </ul>
       <button id="menu" onClick={()=> setShowMenu(!menu)}><i className="fa-solid fa-bars"></i></button></header>
       {dropDown}
    </>
  )
}

export default Header