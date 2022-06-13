import { Link,NavLink } from "react-router-dom"



const NavBar = () => {

    return (

<nav className="nav">

<div className="Categorias">
<ul>
<li>
    <a href="nosotros">Nosotros</a>
    </li>
    <li>
    <a href="Vestidos">Vestidos</a>
    </li>

    <li>
    <a href="accesorios">Accesorios</a>
    </li>
    <li>
    <a href="sustainability">Compromiso sostenible</a>
    
          
</li>
</ul>
</div>
</nav>
)
}
export default NavBar