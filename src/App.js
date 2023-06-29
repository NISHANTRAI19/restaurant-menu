import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import menuAPI from './API/menuAPI'
const uniq = [...new Set(menuAPI.map((curElement) => {
  return (curElement.category);
}))]


function App() {
  const [tempAPI, settempAPI] = useState(menuAPI)

  const filterMenu = (category) => {
    console.log(category)
    const filtered = menuAPI.filter((curElement) => {

      if (category === 'All')
        return menuAPI

      else return (curElement.category === category)

    })

    settempAPI(filtered)
    console.log(filtered)

  }

  return (

    <>
      <Navbar filterMenu={filterMenu} uniq={uniq} />
      <Menu tempAPI={tempAPI} />
    </>
  );
}

export default App;
