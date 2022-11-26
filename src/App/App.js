import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Section from '../Components/Section/Section';
import MainContent from '../Components/MainContent/MainContent';
import Footer from '../Components/Footer/Footer';
import { Data } from '../Data';
import './App.css';

export default function App() {
  const [summary, setSummary] = useState(0)

  /*
  Here we declared a constant in which we get the data from Data.js 
  and pass the appropriate props in order to create the necessary components 
  */
  const main_content = Data.map(box => {
    return <MainContent
      key={box.id}
      setSummary={setSummary}
      icon={box.icon}
      name={box.name}
      squareMeter={box.squareMeter}
    />
  })


  return (
    <div>
      <Header />
      <Section />
      <main className='app-main'>
        {main_content}
      </main>
      <Footer />
    </div>
  );
}

