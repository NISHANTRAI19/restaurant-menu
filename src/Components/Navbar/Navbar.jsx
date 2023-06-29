import React from "react";
import './Navbar.css'
const Navbar =({filterMenu,uniq})=>{

return(
    <>
    <div className="test">
        <nav>
            <ul>
            {uniq.map((curElement) => {
                return (
                          <li onClick={() => filterMenu(curElement)}>{curElement}</li>
                         )})}
<li className='btn' onClick={() => filterMenu('All')}>All</li>
</ul>
</nav >
</div>

    </>
)

}

export default Navbar