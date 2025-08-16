import { useState } from 'react'
import './App.css'
import navigationData from "./tree-list/data.js";   
import List from './tree-list/List.jsx'
import QRCode from 'react-qr-code';
import QRCodeGenerator from './qr-code-generator/qr-code-generator.jsx';
import DarkMode from './dark-mode/darkMode.jsx';
import ScrollBar from './scroll-progressbar/index.jsx';
import useFetchData from './useFetchData.jsx';


function App() {
  const dummyData = useFetchData("https://jsonplaceholder.typicode.com/todos/");

  return (
    <>
      <ScrollBar />
      <div className='container'>
        <div className='navigation-list'>
          <List data={navigationData} />
        </div>
        <QRCodeGenerator />
        <DarkMode />
      </div>
      <ul>
        {dummyData.data && dummyData.data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {dummyData.loading && <p>Loading...</p>};
      {dummyData.error && <p>Error: {dummyData.error}</p>};
   

      
      
      
    </>
  )
  
}

export default App
