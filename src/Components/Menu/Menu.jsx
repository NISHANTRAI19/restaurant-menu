import React from "react";

import './Menu.css'
const Menu =({tempAPI})=>{

return (
<>
    <div className='base'>

    {   
        tempAPI.map((curElement) => {
            
        return (
          <div className='card'>
            <div className="top">
            <span id='id'>{curElement.id}</span>
            <span id='category'>{curElement.category}</span></div><br/>
            <hr></hr>
            <span id='description'>{curElement.description}</span><br/>
            <br/><hr/>
            <div className="bottom">
            <span id='name'>{curElement.name}</span>
            <span id='price'>{curElement.price}</span></div>
            <br/>
            <img id='image' src={curElement.image}></img>
      </div>
    )

  })

}

</div>
</>
)
}

export default Menu